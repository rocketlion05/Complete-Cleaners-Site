import { business } from "@/config/business";
import type { QuoteFields } from "@/lib/quote-form";

/**
 * Email delivery for quote requests.
 *
 * Provider is selected with the EMAIL_PROVIDER environment variable
 * ("resend" | "postmark" | "sendgrid", default "resend") and the matching
 * API key. If no key is configured, submissions are logged to the server
 * console (development-friendly) and the user still sees a success
 * screen, so the site works before email is set up.
 *
 * See README.md ("Contact form email setup") and .env.example.
 */

type SendArgs = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fromAddress(): string {
  return process.env.EMAIL_FROM ?? `${business.name} <onboarding@resend.dev>`;
}

async function sendViaResend(args: SendArgs, apiKey: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress(),
      to: [args.to],
      subject: args.subject,
      text: args.text,
      html: args.html,
      ...(args.replyTo ? { reply_to: args.replyTo } : {}),
    }),
  });
  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}`);
  }
}

async function sendViaPostmark(args: SendArgs, apiKey: string) {
  const response = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      "X-Postmark-Server-Token": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      From: fromAddress(),
      To: args.to,
      Subject: args.subject,
      TextBody: args.text,
      HtmlBody: args.html,
      ...(args.replyTo ? { ReplyTo: args.replyTo } : {}),
      MessageStream: "outbound",
    }),
  });
  if (!response.ok) {
    throw new Error(`Postmark responded ${response.status}`);
  }
}

async function sendViaSendgrid(args: SendArgs, apiKey: string) {
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: args.to }] }],
      from: { email: fromAddress().replace(/^.*<|>$/g, "") },
      subject: args.subject,
      content: [
        { type: "text/plain", value: args.text },
        { type: "text/html", value: args.html },
      ],
      ...(args.replyTo ? { reply_to: { email: args.replyTo } } : {}),
    }),
  });
  if (!response.ok) {
    throw new Error(`SendGrid responded ${response.status}`);
  }
}

async function sendEmail(args: SendArgs): Promise<boolean> {
  const provider = (process.env.EMAIL_PROVIDER ?? "resend").toLowerCase();
  const apiKey =
    provider === "postmark"
      ? process.env.POSTMARK_SERVER_TOKEN
      : provider === "sendgrid"
        ? process.env.SENDGRID_API_KEY
        : process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No provider configured — log safely for development.
    console.info(
      `[quote-form] Email not configured (${provider}); would send "${args.subject}" to ${args.to}`
    );
    return false;
  }

  if (provider === "postmark") {
    await sendViaPostmark(args, apiKey);
  } else if (provider === "sendgrid") {
    await sendViaSendgrid(args, apiKey);
  } else {
    await sendViaResend(args, apiKey);
  }
  return true;
}

const FIELD_LABELS: Record<keyof QuoteFields, string> = {
  fullName: "Full name",
  businessName: "Business name",
  email: "Business email",
  phone: "Phone number",
  propertyAddress: "Property address",
  city: "City",
  squareFootage: "Approximate square footage",
  propertyType: "Property type",
  frequency: "Desired cleaning frequency",
  serviceDays: "Preferred service days",
  closingTime: "Approximate closing time",
  restrooms: "Number of restrooms",
  flooringTypes: "Flooring types",
  currentArrangement: "Current cleaning arrangement",
  startDate: "Requested start date",
  mainConcerns: "Main cleaning concerns",
  additionalDetails: "Additional details",
  contactMethod: "Preferred contact method",
};

/**
 * Sends the internal notification and the prospect confirmation.
 * Returns true if a real email provider handled the messages.
 */
export async function sendQuoteEmails(fields: QuoteFields): Promise<boolean> {
  const recipient =
    process.env.FORM_RECIPIENT_EMAIL ?? business.formRecipientEmail;

  const rows = (Object.keys(FIELD_LABELS) as (keyof QuoteFields)[]).map(
    (key) => ({ label: FIELD_LABELS[key], value: fields[key] || "—" })
  );

  const notificationText = [
    `New walkthrough request from the ${business.name} website`,
    "",
    ...rows.map((row) => `${row.label}: ${row.value}`),
  ].join("\n");

  const notificationHtml = `
    <h2 style="font-family:Arial,sans-serif;color:#171717;">New walkthrough request</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;color:#171717;border-collapse:collapse;">
      ${rows
        .map(
          (row) => `
        <tr>
          <td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top;white-space:nowrap;">${escapeHtml(row.label)}</td>
          <td style="padding:6px 0;">${escapeHtml(row.value)}</td>
        </tr>`
        )
        .join("")}
    </table>`;

  const confirmationText = [
    `Hi ${fields.fullName},`,
    "",
    `Thanks for requesting a free walkthrough from ${business.name}. We received your request for ${fields.businessName} and will follow up soon to schedule a time.`,
    "",
    "What happens next:",
    "1. We reach out to confirm a walkthrough time.",
    "2. We review your property and priorities together.",
    "3. You receive a fixed recurring-service proposal.",
    "",
    `If anything changes in the meantime, reply to this email or call ${business.phone}.`,
    "",
    business.name,
    business.email,
  ].join("\n");

  const confirmationHtml = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#171717;line-height:1.6;max-width:560px;">
      <p>Hi ${escapeHtml(fields.fullName)},</p>
      <p>Thanks for requesting a free walkthrough from <strong>${business.name}</strong>.
      We received your request for ${escapeHtml(fields.businessName)} and will follow up
      soon to schedule a time.</p>
      <p><strong>What happens next:</strong></p>
      <ol>
        <li>We reach out to confirm a walkthrough time.</li>
        <li>We review your property and priorities together.</li>
        <li>You receive a fixed recurring-service proposal.</li>
      </ol>
      <p>If anything changes in the meantime, reply to this email or call
      <a href="tel:${business.phoneHref}">${business.phone}</a>.</p>
      <p>${business.name}<br/>
      <a href="mailto:${business.email}">${business.email}</a></p>
    </div>`;

  const delivered = await sendEmail({
    to: recipient,
    subject: `Walkthrough request — ${fields.businessName} (${fields.city})`,
    text: notificationText,
    html: notificationHtml,
    replyTo: fields.email,
  });

  if (delivered) {
    // Only send the prospect confirmation when a real provider is active.
    try {
      await sendEmail({
        to: fields.email,
        subject: `We received your walkthrough request — ${business.name}`,
        text: confirmationText,
        html: confirmationHtml,
      });
    } catch (error) {
      // The lead was already delivered; a failed confirmation should not
      // surface as an error to the prospect.
      console.error("[quote-form] Confirmation email failed", error);
    }
  }

  return delivered;
}
