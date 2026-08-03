import type { ReactNode } from "react";

/**
 * Simple hand-drawn-feel line icons for service cards, keyed by slug.
 * All 24×24, stroke-based, rendered at the size the parent sets.
 */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
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
  trash: (
    <Icon>
      <path d="M4 7h16" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M6 7l1 13a1 1 0 0 0 1 .9h8a1 1 0 0 0 1-.9L18 7" />
      <path d="M10 11v6M14 11v6" />
    </Icon>
  ),
  vacuum: (
    <Icon>
      <path d="M13 4a3 3 0 0 1 3 3v9" />
      <path d="M13 4h-2" />
      <circle cx="16" cy="18" r="2.4" />
      <path d="M4 20h7" />
      <path d="M4 20l3-6h2l1 6" />
    </Icon>
  ),
  mop: (
    <Icon>
      <path d="M14 3 8 15" />
      <path d="M6.5 15h7l1 5h-9l1-5Z" />
      <path d="M4 22h14" />
    </Icon>
  ),
  restroom: (
    <Icon>
      <path d="M6 4h6v7H6z" />
      <path d="M6 11c0 4 1.5 6 4.5 6H14" />
      <path d="M14 15v4" />
      <path d="M17 5c1.5 1.5 1.5 3.5 0 5M19.5 3.5c2.3 2.6 2.3 5.4 0 8" />
    </Icon>
  ),
  breakroom: (
    <Icon>
      <path d="M5 9h10v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M15 10h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M8 5c0-1 .8-1 .8-2M11.5 5c0-1 .8-1 .8-2" />
    </Icon>
  ),
  dusting: (
    <Icon>
      <path d="M4 20c5-1 7-3 8-7" />
      <path d="M12 13l4-9" />
      <path d="M18.5 5.5 20 4M19.5 8.5 21.5 8M16.5 3.5 17 1.5" />
    </Icon>
  ),
  glass: (
    <Icon>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7c1.5 1.5 4.5 4.5 6 6" />
      <path d="M9 12c1 1 2 2 3 3" />
    </Icon>
  ),
  restock: (
    <Icon>
      <circle cx="12" cy="7" r="3.5" />
      <path d="M12 3.5V7l2 1.5" />
      <path d="M7 14h10l-1 7H8l-1-7Z" />
    </Icon>
  ),
  afterhours: (
    <Icon>
      <path d="M19 14A8 8 0 0 1 9.5 4.5 8 8 0 1 0 19 14Z" />
      <path d="M17 4l.5 1.5L19 6l-1.5.5L17 8l-.5-1.5L15 6l1.5-.5L17 4Z" />
    </Icon>
  ),
  checklist: (
    <Icon>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8.5 8.5l1.5 1.5 3-3" />
      <path d="M8.5 14.5l1.5 1.5 3-3" />
      <path d="M15 9h1M15 15h1" />
    </Icon>
  ),
  deepclean: (
    <Icon>
      <path d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z" />
      <path d="M5 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
      <path d="M18 15l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7Z" />
    </Icon>
  ),
} satisfies Record<string, ReactNode>;

export type ServiceIconName = keyof typeof serviceIcons;
