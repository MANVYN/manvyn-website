import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const AboutCTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8fafc] via-white to-[#eef4ff] py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[#0f1f45] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-14">
          {/* Subtle glow */}
          <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#315fcf]/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
              Let's Talk
            </div>

            <h2 className="mx-auto mt-5 max-w-[700px] text-4xl font-semibold tracking-tight text-[#0f1f45] sm:text-5xl">
              Let's build something meaningful.
            </h2>

            <p className="mx-auto mt-5 max-w-[600px] text-base leading-7 text-[#64748b] sm:text-lg">
              Have an idea, a business challenge or a project in mind? Let's
              talk about what you want to build.
            </p>

            <Link
              to="/start-project"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#315fcf] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#244aa8]"
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

export default AboutCTA;
