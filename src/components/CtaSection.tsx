import { ButtonLink } from "@/components/ui/Button";

type CtaSectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CtaSection({ title, text, buttonLabel, buttonHref }: CtaSectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-paper">
            {title}
          </h2>
          <p className="mt-3 text-lg text-line">{text}</p>
        </div>
        <ButtonLink
          href={buttonHref}
          className="!bg-paper !text-ink hover:!bg-mist"
        >
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  );
}
