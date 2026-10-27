import { ArrowRight, FileText, MessageCircle, Settings } from "lucide-react";
import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "We review",
    description: "We go through your requirements and understand your goals.",
    icon: FileText,
  },
  {
    number: "02",
    title: "We connect",
    description:
      "We discuss the project, answer your questions and explore ideas.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "We plan",
    description: "We outline the right approach, scope and next steps.",
    icon: Settings,
  },
];

const WhatHappensNext = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f1f45] py-20 lg:py-24">
  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#315fcf]/15 blur-3xl" />
  </div>

  <Container>
    <div className="relative">
      <div className="mx-auto max-w-[750px] text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7ea3ff]">
          What Happens Next
        </span>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          From enquiry to next steps.
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          A simple and transparent process to get your project moving.
        </p>
      </div>

      <div className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
        {/* Connecting line */}
        <div className="absolute left-[16%] right-[16%] top-6 hidden h-px bg-gradient-to-r from-[#7ea3ff]/50 via-[#7ea3ff]/20 to-[#7ea3ff]/50 lg:block" />

        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div key={step.number} className="relative text-center">
              {/* Solid badge so the line passes behind it cleanly */}
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#7ea3ff]/30 bg-gradient-to-br from-[#315fcf] to-[#1c3a8a] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(49,95,207,0.35)]">
                {step.number}
              </div>

              <div className="mt-5 flex justify-center text-[#7ea3ff]">
                <Icon size={21} />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-[300px] text-sm leading-6 text-slate-300">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </Container>
</section>
  );
};

export default WhatHappensNext;
