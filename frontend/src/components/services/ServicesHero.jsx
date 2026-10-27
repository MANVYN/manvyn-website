import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
// import servicesHeroImage from "../../assets/images/hero-image.png";

const Services = () => {
  return (
    <main>
      {/* Services Hero */}
      <section className="relative overflow-hidden bg-[#0f1f45]">
        <Container>
          <div className="flex min-h-[460px] items-center justify-center py-16 text-center lg:py-20">
            <div className="relative z-10 mx-auto max-w-[760px]">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7ea3ff] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7ea3ff] shadow-[0_0_10px_rgba(126,163,255,0.8)]" />
                Services
              </div>

              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[58px]">
                Digital solutions built around
                <br />
                your &nbsp;
                <span className="text-[#7ea3ff]">business goals.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-[650px] text-base leading-7 text-slate-300 sm:text-lg">
                From professional websites to e-commerce, web applications and
                custom software, we build digital solutions designed around how
                your business works.
              </p>

              <Link
                to="/start-project"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-[#7ea3ff] hover:bg-white/[0.08]"
              >
                Let's Talk
                <ArrowRight size={17} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Services;
