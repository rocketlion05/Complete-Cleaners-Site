import Script from "next/script";
import { business } from "@/config/business";

/**
 * Optional analytics loaders. Nothing renders unless an analytics ID is
 * configured in src/config/business.ts or via environment variables.
 * See README.md ("Analytics") for setup instructions.
 */
export function Analytics() {
  const gaId =
    process.env.NEXT_PUBLIC_GA_ID || business.analytics.googleAnalyticsId;
  const plausibleDomain =
    process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ||
    business.analytics.plausibleDomain;

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}
      {plausibleDomain ? (
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={plausibleDomain}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
