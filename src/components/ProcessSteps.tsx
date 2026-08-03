type Step = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-6"
        >
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full bg-ink text-base font-bold text-paper"
          >
            {index + 1}
          </span>
          <h3 className="font-bold text-ink">
            <span className="sr-only">Step {index + 1}: </span>
            {step.title}
          </h3>
          <p className="text-sm text-body">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
