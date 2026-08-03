/**
 * Small decorative SVG elements that give the site its hand-drawn,
 * friendly character. All are aria-hidden — purely visual.
 */

type DecorProps = {
  className?: string;
};

/** A four-point "clean sparkle" — the site's recurring motif. */
export function Sparkle({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2c.6 4.8 2 7.4 3.4 8.6C16.8 11.8 19 12 22 12c-4.8.6-7.4 2-8.6 3.4C12.2 16.8 12 19 12 22c-.6-4.8-2-7.4-3.4-8.6C7.2 12.2 5 12 2 12c4.8-.6 7.4-2 8.6-3.4C11.8 7.2 12 5 12 2Z" />
    </svg>
  );
}

/** A short hand-drawn underline swash, used beneath key headings. */
export function Underswash({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 12"
      fill="none"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M3 8.5C22 4.5 55 3 117 5.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Three motion lines — a little "swish" of cleaning movement. */
export function Swish({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
    >
      <path d="M4 6h16" />
      <path d="M9 12h18" />
      <path d="M6 18h13" />
    </svg>
  );
}
