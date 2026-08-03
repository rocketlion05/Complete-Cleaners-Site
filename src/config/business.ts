/**
 * Central business configuration for Complete Cleaners.
 *
 * Edit this file to update contact details, service areas, and feature
 * flags across the entire site. Claims that are not yet true (insured,
 * bonded, licensed, testimonials) are OFF by default and are hidden
 * everywhere until you flip them to `true`.
 */

export const business = {
  /** Public-facing brand name used throughout the site. */
  name: "Complete Cleaners",

  /** Legal entity name. Used only in the footer and legal pages. */
  legalName: "Complete Cleaners NWA LLC",

  /** Production domain (no protocol, no trailing slash). */
  domain: "completecleanersnwa.com",

  /** Canonical site URL derived from the domain. */
  url: "https://completecleanersnwa.com",

  /** Public contact email. */
  email: "hello@completecleanersnwa.com",

  /** Public phone number as displayed to visitors. */
  phone: "479-343-8876",

  /** Phone number formatted for tel: links. */
  phoneHref: "+14793438876",

  /** Primary city served. */
  primaryCity: "Fayetteville",

  /** Primary state (abbreviation). */
  state: "AR",

  /** State spelled out for prose and structured data. */
  stateFull: "Arkansas",

  /** Wider region label used in copy. */
  region: "Northwest Arkansas",

  /**
   * Communities that may be considered depending on route availability.
   * Shown on the Service Area page. No service is guaranteed for these.
   */
  nearbyAreas: ["Johnson", "Farmington", "Springdale"],

  /**
   * Business hours statement. Deliberately general — replace with exact
   * staffed hours here if you decide to publish them.
   */
  hoursStatement:
    "Quote requests and messages are accepted anytime. Calls are returned during normal business hours.",

  /**
   * Social profile URLs. Leave empty strings to hide the corresponding
   * links. Example: facebook: "https://www.facebook.com/yourpage"
   */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    google: "",
  },

  /**
   * Logo path. The real mascot logo (transparent background, trimmed
   * square) lives at /public/complete-cleaners-logo.png. A generic
   * placeholder is still available at /logo-placeholder.svg if needed.
   */
  logoPath: "/complete-cleaners-logo.png",

  /**
   * Feature flags for claims and sections. Everything defaults to
   * false/blank so the site never states something that is not yet true.
   * Flip a flag only once the underlying claim is real (for example,
   * once an insurance policy is active).
   */
  flags: {
    /** Set true only when a general liability policy is active. */
    insured: false,
    /** Set true only when a janitorial/surety bond is active. */
    bonded: false,
    /** Set true only if a business license applies and is current. */
    licensed: false,
    /** Set true to show the testimonials section (add real quotes first). */
    showTestimonials: false,
  },

  /**
   * Testimonials shown only when flags.showTestimonials is true.
   * Add real customer quotes here — never invented ones.
   */
  testimonials: [] as { quote: string; author: string; company: string }[],

  /**
   * Analytics. All disabled by default. See README for setup.
   * - googleAnalyticsId: e.g. "G-XXXXXXXXXX"
   * - plausibleDomain: e.g. "completecleanersnwa.com"
   */
  analytics: {
    googleAnalyticsId: "",
    plausibleDomain: "",
  },

  /**
   * Where quote-form notifications are sent. Override with the
   * FORM_RECIPIENT_EMAIL environment variable if needed.
   */
  formRecipientEmail: "hello@completecleanersnwa.com",
} as const;

export type Business = typeof business;
