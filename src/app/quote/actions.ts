"use server";

import { headers } from "next/headers";
import { sendQuoteEmails } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";
import {
  CONTACT_METHODS,
  FREQUENCIES,
  HONEYPOT_FIELD,
  PROPERTY_TYPES,
  type QuoteFields,
  type QuoteFormState,
} from "@/lib/quote-form";

const MAX_SHORT = 200;
const MAX_LONG = 2000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s()+.\-ext]{7,25}$/i;

/** Trim, collapse control characters, and cap length. */
function clean(value: FormDataEntryValue | null, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]+/g, " ").trim().slice(0, max);
}

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  // Honeypot: hidden field that real visitors never fill in. Pretend
  // success so bots learn nothing.
  if (clean(formData.get(HONEYPOT_FIELD), 100) !== "") {
    return { status: "success" };
  }

  const fields: QuoteFields = {
    fullName: clean(formData.get("fullName"), MAX_SHORT),
    businessName: clean(formData.get("businessName"), MAX_SHORT),
    email: clean(formData.get("email"), MAX_SHORT),
    phone: clean(formData.get("phone"), 30),
    propertyAddress: clean(formData.get("propertyAddress"), MAX_SHORT),
    city: clean(formData.get("city"), 100),
    squareFootage: clean(formData.get("squareFootage"), 30),
    propertyType: clean(formData.get("propertyType"), 100),
    frequency: clean(formData.get("frequency"), 50),
    serviceDays: clean(formData.get("serviceDays"), MAX_SHORT),
    closingTime: clean(formData.get("closingTime"), 50),
    restrooms: clean(formData.get("restrooms"), 20),
    flooringTypes: clean(formData.get("flooringTypes"), MAX_SHORT),
    currentArrangement: clean(formData.get("currentArrangement"), MAX_SHORT),
    startDate: clean(formData.get("startDate"), 50),
    mainConcerns: clean(formData.get("mainConcerns"), MAX_LONG),
    additionalDetails: clean(formData.get("additionalDetails"), MAX_LONG),
    contactMethod: clean(formData.get("contactMethod"), 50),
  };
  const consent = formData.get("consent") === "on";

  const fieldErrors: QuoteFormState["fieldErrors"] = {};

  if (!fields.fullName) fieldErrors.fullName = "Please enter your name.";
  if (!fields.businessName)
    fieldErrors.businessName = "Please enter your business name.";
  if (!fields.email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(fields.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!fields.phone) {
    fieldErrors.phone = "Please enter a phone number.";
  } else if (!PHONE_PATTERN.test(fields.phone)) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }
  if (!fields.propertyAddress)
    fieldErrors.propertyAddress = "Please enter the property address.";
  if (!fields.city) fieldErrors.city = "Please enter the city.";
  if (!(PROPERTY_TYPES as readonly string[]).includes(fields.propertyType))
    fieldErrors.propertyType = "Please choose a property type.";
  if (!(FREQUENCIES as readonly string[]).includes(fields.frequency))
    fieldErrors.frequency = "Please choose a cleaning frequency.";
  if (
    fields.contactMethod &&
    !(CONTACT_METHODS as readonly string[]).includes(fields.contactMethod)
  )
    fieldErrors.contactMethod = "Please choose a contact method.";
  if (!consent)
    fieldErrors.consent = "Please confirm you agree to be contacted.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please review the highlighted fields below.",
      fieldErrors,
      values: fields,
    };
  }

  // Best-effort rate limiting keyed by client IP.
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message:
        "Too many requests from this connection. Please wait a few minutes and try again, or call us directly.",
      values: fields,
    };
  }

  try {
    const delivered = await sendQuoteEmails(fields);
    if (!delivered && process.env.NODE_ENV !== "production") {
      // Development visibility when no email provider is configured.
      console.info("[quote-form] Submission received:", {
        ...fields,
        // Avoid logging free-text fields in full.
        mainConcerns: fields.mainConcerns.slice(0, 80),
        additionalDetails: fields.additionalDetails.slice(0, 80),
      });
    }
  } catch (error) {
    console.error("[quote-form] Email delivery failed", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your request. Please try again, or contact us by phone or email.",
      values: fields,
    };
  }

  return { status: "success" };
}
