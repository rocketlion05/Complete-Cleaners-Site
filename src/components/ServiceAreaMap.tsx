import { business } from "@/config/business";

/**
 * Simple illustrative service-area graphic. This is a stylized diagram,
 * not a geographic map, and intentionally contains no street-level
 * detail or location pins.
 */
export function ServiceAreaMap() {
  return (
    <figure className="rounded-xl border border-line bg-mist p-6 sm:p-10">
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-label={`Illustration of the ${business.name} service area centered on ${business.primaryCity} with nearby Northwest Arkansas communities around it.`}
        className="mx-auto w-full max-w-md"
      >
        {/* Outer ring: nearby communities considered by route */}
        <circle
          cx="200"
          cy="150"
          r="130"
          fill="none"
          stroke="#e8e8e5"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {/* Inner ring: primary service area */}
        <circle cx="200" cy="150" r="72" fill="#eef1ee" stroke="#5f7060" strokeWidth="2" />
        <text
          x="200"
          y="145"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="#171717"
        >
          {business.primaryCity}
        </text>
        <text x="200" y="166" textAnchor="middle" fontSize="12" fill="#444444">
          Primary service area
        </text>

        <text x="200" y="40" textAnchor="middle" fontSize="13" fill="#6b6b68">
          Springdale
        </text>
        <text x="70" y="220" textAnchor="middle" fontSize="13" fill="#6b6b68">
          Farmington
        </text>
        <text x="330" y="110" textAnchor="middle" fontSize="13" fill="#6b6b68">
          Johnson
        </text>
        <text x="200" y="285" textAnchor="middle" fontSize="12" fill="#6b6b68">
          Nearby communities considered by route
        </text>
      </svg>
      <figcaption className="mt-4 text-center text-sm text-faint">
        Illustration only, not a geographic map. Service availability is
        confirmed during the walkthrough process.
      </figcaption>
    </figure>
  );
}
