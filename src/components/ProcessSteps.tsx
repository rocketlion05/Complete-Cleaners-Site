type Step = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Dashed connector behind the number badges on wide screens */}
      <div
        aria-hidden="true"
        className="absolute left-[10%] right-[10%] top-11 hidden border-t-2 border-dashed border-line lg:block"
      />
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative flex flex-col gap-3 rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <span
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-full border-2 border-ink bg-paper font-[family-name:var(--font-display)] text-lg font-bold text-ink"
          >
            {index + 1}
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
            <span className="sr-only">Step {index + 1}: </span>
            {step.title}
          </h3>
          <p className="text-sm text-body">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
