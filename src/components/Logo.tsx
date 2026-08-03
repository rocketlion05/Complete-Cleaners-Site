import Image from "next/image";
import { business } from "@/config/business";

type LogoProps = {
  /** Pixel size of the square logo mark. */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Renders the brand logo mark. The image source is controlled by
 * `logoPath` in src/config/business.ts so the placeholder can be swapped
 * for the real mascot logo without touching component code.
 */
export function Logo({ size = 40, className = "", priority = false }: LogoProps) {
  return (
    <Image
      src={business.logoPath}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
