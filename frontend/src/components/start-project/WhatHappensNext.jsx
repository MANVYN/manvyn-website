import { ArrowRight, FileText, MessageCircle, Settings } from "lucide-react";
import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "We review",
    description:
      "We go through your requirements and understand your goals.",
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
    description:
      "We outline the right approach, scope and next steps.",
    icon: Settings,
  },
];

const WhatHappensNext = () => {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[750px] text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
            What Happens Next
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0b1220] sm:text-5xl">
            From enquiry to next steps.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#64748b] sm:text-lg">
            A simple and transparent process to get your project moving.
          </p>
        </div>

        <div className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {/* Connecting lines */}
          <div className="absolute left-[16%] right-[16%] top-6 hidden h-px bg-slate-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf0ff] text-sm font-semibold text-[#315fcf]">
                  {step.number}
                </div>

                <div className="mt-5 flex justify-center text-[#315fcf]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-[#0b1220]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[300px] text-sm leading-6 text-[#64748b]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhatHappensNext;