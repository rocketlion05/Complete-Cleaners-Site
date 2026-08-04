"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitQuoteRequest } from "@/app/quote/actions";
import {
  CONTACT_METHODS,
  FREQUENCIES,
  HONEYPOT_FIELD,
  PROPERTY_TYPES,
  initialQuoteFormState,
} from "@/lib/quote-form";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input, Select, Textarea } from "@/components/ui/fields";
import { FormSuccess } from "@/components/FormSuccess";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Request a Free Walkthrough"}
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useActionState(
    submitQuoteRequest,
    initialQuoteFormState
  );
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Move focus to the error summary when validation fails so screen-reader
  // and keyboard users land on the explanation.
  useEffect(() => {
    if (state.status === "error") {
      errorSummaryRef.current?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return <FormSuccess />;
  }

  const errors = state.fieldErrors ?? {};
  const values = state.values ?? {};

  return (
    <form action={formAction} noValidate className="flex flex-col gap-8">
      {state.status === "error" && state.message ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-800"
        >
          {state.message}
        </div>
      ) : null}

      {/* Honeypot — hidden from real visitors, bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
        <input
          type="text"
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-lg font-bold text-ink">
          Contact information
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            id="fullName"
            name="fullName"
            label="Full name"
            autoComplete="name"
            required
            defaultValue={values.fullName}
            error={errors.fullName}
          />
          <Input
            id="businessName"
            name="businessName"
            label="Business name"
            autoComplete="organization"
            required
            defaultValue={values.businessName}
            error={errors.businessName}
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Business email"
            autoComplete="email"
            required
            defaultValue={values.email}
            error={errors.email}
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Phone number"
            autoComplete="tel"
            required
            defaultValue={values.phone}
            error={errors.phone}
          />
        </div>
        <Select
          id="contactMethod"
          name="contactMethod"
          label="Preferred contact method"
          options={CONTACT_METHODS}
          defaultValue={values.contactMethod ?? ""}
          error={errors.contactMethod}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-lg font-bold text-ink">
          Property details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            id="propertyAddress"
            name="propertyAddress"
            label="Property address"
            autoComplete="street-address"
            required
            defaultValue={values.propertyAddress}
            error={errors.propertyAddress}
          />
          <Input
            id="city"
            name="city"
            label="City"
            autoComplete="address-level2"
            required
            defaultValue={values.city}
            error={errors.city}
          />
          <Select
            id="propertyType"
            name="propertyType"
            label="Property type"
            options={PROPERTY_TYPES}
            required
            defaultValue={values.propertyType ?? ""}
            error={errors.propertyType}
          />
          <Input
            id="squareFootage"
            name="squareFootage"
            label="Approximate square footage"
            inputMode="numeric"
            hint="A rough estimate is fine."
            defaultValue={values.squareFootage}
            error={errors.squareFootage}
          />
          <Input
            id="restrooms"
            name="restrooms"
            label="Number of restrooms"
            inputMode="numeric"
            defaultValue={values.restrooms}
            error={errors.restrooms}
          />
          <Input
            id="flooringTypes"
            name="flooringTypes"
            label="Flooring types"
            hint="For example: carpet, tile, polished concrete."
            defaultValue={values.flooringTypes}
            error={errors.flooringTypes}
          />
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-lg font-bold text-ink">
          Service preferences
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Select
            id="frequency"
            name="frequency"
            label="Desired cleaning frequency"
            options={FREQUENCIES}
            required
            defaultValue={values.frequency ?? ""}
            error={errors.frequency}
          />
          <Input
            id="serviceDays"
            name="serviceDays"
            label="Preferred service days"
            hint="For example: Monday, Wednesday, Friday."
            defaultValue={values.serviceDays}
            error={errors.serviceDays}
          />
          <Input
            id="closingTime"
            name="closingTime"
            label="Approximate closing time"
            hint="Most service happens after hours."
            defaultValue={values.closingTime}
            error={errors.closingTime}
          />
          <Input
            id="startDate"
            name="startDate"
            label="Requested start date"
            hint="An approximate timeframe is fine."
            defaultValue={values.startDate}
            error={errors.startDate}
          />
        </div>
        <Input
          id="currentArrangement"
          name="currentArrangement"
          label="Current cleaning arrangement"
          hint="For example: in-house staff, another company, or none."
          defaultValue={values.currentArrangement}
          error={errors.currentArrangement}
        />
        <Textarea
          id="mainConcerns"
          name="mainConcerns"
          label="Main cleaning concerns"
          hint="What matters most? Restrooms, floors, dusting, consistency."
          defaultValue={values.mainConcerns}
          error={errors.mainConcerns}
        />
        <Textarea
          id="additionalDetails"
          name="additionalDetails"
          label="Additional details"
          defaultValue={values.additionalDetails}
          error={errors.additionalDetails}
        />
      </fieldset>

      <Checkbox
        id="consent"
        name="consent"
        required
        error={errors.consent}
        label={
          <>
            I agree that Complete Cleaners may contact me regarding this quote
            request. Submission of this form does not create a service
            agreement.
          </>
        }
      />

      <SubmitButton />
    </form>
  );
}
