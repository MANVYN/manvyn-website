import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
// import servicesHeroImage from "../../assets/images/hero-image.png";

const Services = () => {
  return (
    <main>
      {/* Services Hero */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f8ff] via-white to-[#eef3ff]"> */}
      <section className="relative overflow-hidden bg-[#14223d]">
        <Container>
          {/* <div className="grid min-h-[520px] items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20"> */}
            <div className="flex min-h-[460px] items-center justify-center py-16 text-center lg:py-20">

            {/* Left Content */}
            {/* <div className="relative z-10 max-w-[600px]"> */}
                <div className="relative z-10 mx-auto max-w-[760px]">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#315fcf]">
                Services
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[58px]">
                Digital solutions
                built around 
                <br />your &nbsp;
                <span className="text-[#315fcf]">
                  business goals.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-base leading-7 text-[#64748b] sm:text-lg">
                From professional websites to e-commerce, web applications
                and custom software, we build digital solutions designed
                around how your business works.
              </p>

              <Link
                to="/start-project"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:bg-[#162033]"
              >
                Let's Talk
                <ArrowRight size={17} strokeWidth={2} />
              </Link>
            </div>

            {/* Right Image */}
            {/* <div className="relative flex items-center justify-center lg:justify-end">
              <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-[#315fcf]/10 blur-3xl" />

              <img
                src={servicesHeroImage}
                alt="Digital solutions for businesses"
                className="relative z-10 w-full max-w-[620px] object-contain"
              />
            </div> */}

          </div>
        </Container>
      </section>
    </main>
  );
};

export default Services;