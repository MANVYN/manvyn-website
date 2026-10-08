import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, goals, users and the problem you're trying to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the right scope, structure and technical approach before development begins.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop the solution with regular communication and feedback.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We launch, measure and continue improving as your business evolves.",
  },
];

const HowWeWork = () => {
  return (
    // <section className="bg-[#f8fafc] py-20 lg:py-28">
    <section className="bg-[#f8fafc] py-14 lg:py-22">
      <Container>
        {/* Heading */}
        <div className="max-w-[700px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
            How We Work
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0f1f45] sm:text-5xl">
            From idea to something that works.
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-7 text-[#64748b] sm:text-lg">
            We keep the process clear, collaborative and focused on moving your
            project forward.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Number */}
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#315fcf] bg-[#f8fafc] text-xs font-semibold text-[#315fcf]">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[#0f1f45]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748b] sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
