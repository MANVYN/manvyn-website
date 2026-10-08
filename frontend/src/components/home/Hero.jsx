import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Users, Zap } from "lucide-react";

import heroImage from "../../assets/images/homepage-hero.png";
import Container from "../common/Container";

const Hero = () => {
  useEffect(() => {
    const words = [
      "digital presence.",
      "business growth.",
      "better experiences.",
    ];

    let i = 0;
    let j = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const element = document.getElementById("typewriter");

      if (!element) return;

      const currentWord = words[i];

      if (isDeleting) {
        element.textContent = currentWord.substring(0, j - 1);
        j--;

        if (j === 0) {
          isDeleting = false;
          i = (i + 1) % words.length;
        }
      } else {
        element.textContent = currentWord.substring(0, j + 1);
        j++;

        if (j === currentWord.length) {
          isDeleting = true;

          // Pause before deleting
          timer = setTimeout(type, 1800);
          return;
        }
      }

      timer = setTimeout(type, isDeleting ? 60 : 100);
    };

    type();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#14223d]">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-40 h-[600px] w-[600px] rounded-full bg-[#315fcf]/10 blur-3xl" />

        <div className="absolute right-[20%] top-[35%] h-[350px] w-[350px] rounded-full bg-[#3b82b6]/10 blur-3xl" />

        <div className="absolute -bottom-40 left-1/5 h-[500px] w-[500px] rounded-full bg-indigo-100/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid items-center gap-12 py-16  lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-2">
          {/* lg:min-h-[calc(100vh-80px)] */}

          {/* LEFT CONTENT */}

          <div className="relative z-10 max-w-[600px]">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#4d7ff5]/25 bg-[#4d7ff5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a8beff] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
              We build digital experiences
            </div>

            {/* Heading */}
            <h1 className="text-[42px] font-bold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[60px]">
              Your business
              <br />
              deserves a better
              <br />
              <span className="relative inline-block text-[#4d7ff5]">
                {/* Reserves space for the longest phrase */}
                <span className="invisible">digital experiences.</span>

                <span id="typewriter" className="absolute left-0 top-0">
                  digital presence.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-[#a7b2c5] sm:text-base">
              Modern websites, e-commerce experiences and web applications built
              for businesses and startups to grow, scale and stand out.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* Primary */}
              <Link
                to="/start-project"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#315fcf] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition-all duration-200 hover:bg-[#3d6fe5] hover:shadow-xl hover:shadow-blue-900/30"
              >
                Start a Project
                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              {/* Secondary */}
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.08]"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px] lg:justify-end">
            {/* Main glow */}
            <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#315fcf]/15 blur-3xl" />

            {/* Decorative circle */}
            <div className="pointer-events-none absolute right-[10%] top-[8%] h-24 w-24 rounded-full border border-[#315fcf]/20" />

            {/* Decorative dots */}
            <div className="pointer-events-none absolute right-[5%] top-[18%] grid grid-cols-4 gap-2 opacity-50">
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-[#315fcf]"
                />
              ))}
            </div>

            {/* Main product visual */}
            <img
              src={heroImage}
              alt="Modern web and digital product interface"
              width="1536"
              height="1024"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="relative z-10 w-full max-w-[700px] object-contain drop-shadow-[0_30px_60px_rgba(37,99,235,0.18)]"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="relative z-10 mx-auto grid w-full max-w-[900px] grid-cols-1 gap-6 pb-16 sm:grid-cols-3 sm:gap-5 lg:pb-20">
          {/* Benefit 1 */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-[#6f97ff]">
              <Zap size={18} strokeWidth={2} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Fast & Modern</p>

              <p className="mt-1 text-sm leading-5 text-[#8f9db3]">
                High-performance solutions
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-[#6f97ff]">
              <ShieldCheck size={18} strokeWidth={2} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Business Focused
              </p>

              <p className="mt-1 text-sm leading-5 text-[#8f9db3]">
                Built for real growth
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-[#6f97ff]">
              <Users size={18} strokeWidth={2} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Long-Term Partner
              </p>

              <p className="mt-1 text-sm leading-5 text-[#8f9db3]">
                We're in it with you
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
