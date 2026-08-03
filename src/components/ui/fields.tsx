import type { ComponentProps, ReactNode } from "react";

const inputBase =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-faint focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ink aria-[invalid=true]:border-red-700";

type FieldWrapperProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
};

export function FieldWrapper({
  id,
  label,
  required,
  hint,
  error,
  children,
}: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-faint">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-faint"> (optional)</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="text-sm text-faint">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type InputProps = ComponentProps<"input"> & {
  label: string;
  id: string;
  hint?: string;
  error?: string;
};

export function Input({ label, id, hint, error, required, ...props }: InputProps) {
  return (
    <FieldWrapper id={id} label={label} required={required} hint={hint} error={error}>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={inputBase}
        {...props}
      />
    </FieldWrapper>
  );
}

type TextareaProps = ComponentProps<"textarea"> & {
  label: string;
  id: string;
  hint?: string;
  error?: string;
};

export function Textarea({ label, id, hint, error, required, ...props }: TextareaProps) {
  return (
    <FieldWrapper id={id} label={label} required={required} hint={hint} error={error}>
      <textarea
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={`${inputBase} min-h-28`}
        {...props}
      />
    </FieldWrapper>
  );
}

type SelectProps = ComponentProps<"select"> & {
  label: string;
  id: string;
  hint?: string;
  error?: string;
  options: readonly string[];
  placeholder?: string;
};

export function Select({
  label,
  id,
  hint,
  error,
  options,
  placeholder = "Select an option",
  required,
  ...props
}: SelectProps) {
  return (
    <FieldWrapper id={id} label={label} required={required} hint={hint} error={error}>
      <select
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={inputBase}
        defaultValue=""
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

type CheckboxProps = ComponentProps<"input"> & {
  label: ReactNode;
  id: string;
  error?: string;
};

export function Checkbox({ label, id, error, ...props }: CheckboxProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 size-5 shrink-0 accent-ink"
          {...props}
        />
        <label htmlFor={id} className="text-sm text-body">
          {label}
        </label>
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function describedBy(id: string, hint?: string, error?: string) {
  const ids = [];
  if (hint) ids.push(`${id}-hint`);
  if (error) ids.push(`${id}-error`);
  return ids.length ? ids.join(" ") : undefined;
}
