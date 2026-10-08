import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-b from-[#f4f7ff] via-[#f8faff] to-white py-16 lg:py-20">
      <Container>
        {/* <div className="relative overflow-hidden rounded-3xl bg-[#0b1220] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-16"> */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#1d3f91] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-14">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#315fcf]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-900/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-[700px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4d7ff5]/25 bg-[#4d7ff5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a8beff] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
              Let's Build Together
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have an idea or need
              <br className="hidden sm:block" /> a better website?
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 text-slate-300 sm:text-base">
              Tell us what you're looking to build. Let's talk about your goals
              and find the right digital solution for your business.
            </p>

            {/* Single CTA */}
            <Link
              to="/start-project"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1220] transition-all duration-200 hover:bg-slate-100"
            >
              Let's Talk
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
