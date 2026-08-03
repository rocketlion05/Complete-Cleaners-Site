/**
 * Shared definitions for the quote-request form, used by both the client
 * form component and the server action so options and labels stay in sync.
 */

export const PROPERTY_TYPES = [
  "Professional office",
  "Law or accounting office",
  "Insurance office",
  "Real-estate or property-management office",
  "Counseling or therapy practice",
  "Church or community facility",
  "Showroom",
  "Other commercial property",
] as const;

export const FREQUENCIES = [
  "Once weekly",
  "Twice weekly",
  "Three times weekly",
  "Four times weekly",
  "Five times weekly",
  "Not sure",
] as const;

export const CONTACT_METHODS = ["Email", "Phone call", "Text message"] as const;

/** Field name of the honeypot input. Real users never fill this in. */
export const HONEYPOT_FIELD = "website";

export type QuoteFields = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  city: string;
  squareFootage: string;
  propertyType: string;
  frequency: string;
  serviceDays: string;
  closingTime: string;
  restrooms: string;
  flooringTypes: string;
  currentArrangement: string;
  startDate: string;
  mainConcerns: string;
  additionalDetails: string;
  contactMethod: string;
};

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  /** Top-of-form message for overall errors. */
  message?: string;
  /** Per-field validation errors keyed by field name. */
  fieldErrors?: Partial<Record<keyof QuoteFields | "consent", string>>;
  /** Submitted values echoed back so the form can repopulate on error. */
  values?: Partial<QuoteFields>;
};

export const initialQuoteFormState: QuoteFormState = { status: "idle" };
