import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { process } from "../../data/process";
import Container from "../common/Container";

const Process = () => {
  return (
   <section className="relative overflow-hidden bg-[#0f1f45] py-20 lg:py-24">
  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#315fcf]/15 blur-3xl" />
  </div>

  <Container>
    <div className="relative">
      {/* Heading */}
      <div className="mx-auto max-w-[650px] text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7ea3ff]">
          Our Process
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          From idea to digital reality
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
          A simple, transparent process designed to keep your project moving
          in the right direction.
        </p>
      </div>

      {/* Process */}
      <div className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-5">
        {process.map((item, index) => (
          <div key={item.step} className="relative">
            {/* Connector: starts after this badge, ends before the next one */}
            {index !== process.length - 1 && (
              <div className="absolute left-[68px] top-7 hidden h-px w-[calc(100%-60px)] bg-gradient-to-r from-[#7ea3ff]/60 via-[#7ea3ff]/25 to-[#7ea3ff]/60 md:block" />
            )}

            {/* Step number */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7ea3ff]/30 bg-gradient-to-br from-[#315fcf] to-[#1c3a8a] text-sm font-bold text-white shadow-[0_10px_30px_rgba(49,95,207,0.35)]">
              {item.step}
            </div>

            {/* Content */}
            <h3 className="mt-5 text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <Link
          to="/start-project"
          className="inline-flex items-center gap-2 rounded-xl bg-[#315fcf] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-all duration-200 hover:bg-[#3d6fe5]"
        >
          Let's Build Something
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </Container>
</section>
  );
};

export default Process;
