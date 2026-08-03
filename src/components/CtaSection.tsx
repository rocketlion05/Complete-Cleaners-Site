import { ButtonLink } from "@/components/ui/Button";
import { Sparkle } from "@/components/decor";

type CtaSectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CtaSection({ title, text, buttonLabel, buttonHref }: CtaSectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="bg-dots-dark absolute inset-0" />
      <Sparkle className="absolute right-10 top-8 size-6 text-paper/25" />
      <Sparkle className="absolute bottom-10 right-40 size-4 text-paper/15" />
      <Sparkle className="absolute left-8 top-14 size-5 text-paper/20" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2
            id="cta-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-paper"
          >
            {title}
          </h2>
          <p className="mt-3 text-lg text-line">{text}</p>
        </div>
        <ButtonLink
          href={buttonHref}
          className="shrink-0 !bg-paper !text-ink hover:!bg-mist"
        >
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  );
}
