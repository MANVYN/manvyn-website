import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { process } from "../../data/process";
import Container from "../common/Container";

const Process = () => {
  return (
    <section className="bg-[#e7ebf1] py-20 lg:py-24">
      {/* <section className="bg-white py-20 lg:py-24"> */}
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-[650px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#315fcf]">
            Our Process
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
            From idea to digital reality
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#64748b] sm:text-base">
            A simple, transparent process designed to keep your project moving
            in the right direction.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-5">
          {process.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector */}
              {index !== process.length - 1 && (
                <div className="absolute left-[calc(100%+10px)] top-7 hidden h-px w-[calc(100%-20px)] bg-slate-200 md:block" />
              )}

              {/* Step number */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1220] text-sm font-bold text-white shadow-lg shadow-slate-900/10">
                {item.step}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-[#0b1220]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#64748b]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/start-project"
            className="inline-flex items-center gap-2 rounded-xl bg-[#315fcf] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244aa8]"
          >
            Let's Build Something
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Process;
