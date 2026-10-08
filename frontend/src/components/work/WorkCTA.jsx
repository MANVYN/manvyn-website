import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const WorkCTA = () => {
  return (
    <section className="bg-white pb-20 lg:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1f45] via-[#111d35] to-[#244aa8] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          {/* Decorative glow */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#315fcf]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#4d7ff5]/25 bg-[#4d7ff5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a8beff] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
                Have a project in mind?
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let's build something great together.
              </h2>

              <p className="mt-4 max-w-[650px] text-sm leading-6 text-slate-300 sm:text-base">
                Whether it's a website, an e-commerce store or a custom web
                application, we'd love to hear about your ideas.
              </p>
            </div>

            <Link
              to="/start-project"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1f45] transition-colors hover:bg-slate-100"
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

export default WorkCTA;
