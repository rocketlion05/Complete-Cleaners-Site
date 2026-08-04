import type { ReactNode } from "react";

/**
 * Line icons for service cards, keyed by slug. All 24x24, stroke-based,
 * drawn to read literally at a glance (a toilet for restrooms, an
 * upright vacuum for vacuuming, and so on).
 */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8" {...strokeProps}>
      {children}
    </svg>
  );
}

export const serviceIcons = {
  /** Trash can with lid and handle */
  trash: (
    <Icon>
      <path d="M4.5 6.5h15" />
      <path d="M9.5 6.5V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v1.5" />
      <path d="M6.2 6.5l.8 12.6a1.5 1.5 0 0 0 1.5 1.4h7a1.5 1.5 0 0 0 1.5-1.4l.8-12.6" />
      <path d="M10 10.5v6.5M14 10.5v6.5" />
    </Icon>
  ),
  /** Upright vacuum: grip, shaft, capsule body, wide floor head */
  vacuum: (
    <Icon>
      <path d="M10.5 3h3" />
      <path d="M12 3v3.5" />
      <rect x="9" y="6.5" width="6" height="9" rx="3" />
      <path d="M9 11.5h6" />
      <path d="M12 15.5v2" />
      <rect x="6.5" y="17.5" width="11" height="3" rx="1.5" />
    </Icon>
  ),
  /** Mop: handle, head band, strands */
  mop: (
    <Icon>
      <path d="M12 3v8.5" />
      <path d="M8 11.5h8l.9 3.5H7.1l.9-3.5Z" />
      <path d="M8.7 15l-.7 5M12 15v5M15.3 15l.7 5" />
    </Icon>
  ),
  /** Toilet, side profile: tank, seat, bowl, pedestal */
  restroom: (
    <Icon>
      <rect x="5" y="3.5" width="4.5" height="6.5" rx="1" />
      <path d="M9.5 10h10" />
      <path d="M19.5 10c-.3 4.3-3 6.5-7 6.5H9.5V10" />
      <path d="M12.5 16.5v3" />
      <path d="M9 19.5h7" />
    </Icon>
  ),
  /** Coffee mug with steam */
  breakroom: (
    <Icon>
      <path d="M5.5 9.5H15v6a3.5 3.5 0 0 1-3.5 3.5H9a3.5 3.5 0 0 1-3.5-3.5v-6Z" />
      <path d="M15 11h1.5a2.25 2.25 0 0 1 0 4.5H15" />
      <path d="M8.5 6.5c0-1 .8-1.2.8-2.2M12 6.5c0-1 .8-1.2.8-2.2" />
    </Icon>
  ),
  /** Spray bottle with mist */
  dusting: (
    <Icon>
      <path d="M9 20.5h5.5a1.5 1.5 0 0 0 1.5-1.5v-5c0-1.6-.9-2.5-.9-2.5h-5s-1.1 1.1-1.1 2.5v5A1.5 1.5 0 0 0 9 20.5Z" />
      <path d="M10.5 11.5V8.5h2.5v3" />
      <path d="M10.5 8.5v-3h4l1.8.7" />
      <path d="M16.3 6.2h1.2" />
      <path d="M20 4.2v.01M21 6.2v.01M20 8.2v.01" />
    </Icon>
  ),
  /** Window with four panes */
  glass: (
    <Icon>
      <rect x="5" y="4" width="14" height="16" rx="1" />
      <path d="M12 4v16M5 12h14" />
    </Icon>
  ),
  /** Paper roll with hanging sheet */
  restock: (
    <Icon>
      <circle cx="10" cy="8" r="4.5" />
      <circle cx="10" cy="8" r="1.3" />
      <path d="M14.5 8v9.8a1.2 1.2 0 0 0 1.2 1.2h3.8" />
    </Icon>
  ),
  /** Crescent moon with a star for after-hours service */
  afterhours: (
    <Icon>
      <path d="M19 14.5A8.5 8.5 0 0 1 9.5 4a8 8 0 1 0 9.5 10.5Z" />
      <path d="M17.5 4.5l.4 1.1 1.1.4-1.1.4-.4 1.1-.4-1.1-1.1-.4 1.1-.4.4-1.1Z" />
    </Icon>
  ),
  /** Clipboard checklist */
  checklist: (
    <Icon>
      <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
      <rect x="9.5" y="2.75" width="5" height="3.25" rx="1" />
      <path d="M8.5 11l1.4 1.4 2.6-2.9" />
      <path d="M8.5 16.5l1.4 1.4 2.6-2.9" />
      <path d="M14.8 11.5h1.7M14.8 17h1.7" />
    </Icon>
  ),
  /** Cluster of sparkles for deep cleaning */
  deepclean: (
    <Icon>
      <path d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z" />
      <path d="M5.5 14.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
      <path d="M18 15.5l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7Z" />
    </Icon>
  ),
} satisfies Record<string, ReactNode>;

export type ServiceIconName = keyof typeof serviceIcons;
