import { business } from "@/config/business";

/**
 * LocalBusiness structured data for a service-area business.
 * Deliberately contains NO street address — the company operates as a
 * service-area business — and no rating or review markup.
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    telephone: business.phoneHref,
    email: business.email,
    image: `${business.url}${business.logoPath}`,
    logo: `${business.url}${business.logoPath}`,
    description:
      "Commercial cleaning and janitorial services for offices and professional properties in Fayetteville and Northwest Arkansas.",
    areaServed: [
      {
        "@type": "City",
        name: `${business.primaryCity}, ${business.stateFull}`,
      },
      ...business.nearbyAreas.map((area) => ({
        "@type": "City" as const,
        name: `${area}, ${business.stateFull}`,
      })),
    ],
    knowsAbout: [
      "Commercial cleaning",
      "Office cleaning",
      "Janitorial services",
      "After-hours cleaning",
    ],
    makesOffer: [
      "Recurring office cleaning",
      "Restroom cleaning",
      "Floor and carpet maintenance",
      "Trash and recycling support",
    ].map((serviceName) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: serviceName,
        serviceType: "Commercial cleaning",
        areaServed: `${business.primaryCity}, ${business.stateFull}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
