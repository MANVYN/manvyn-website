import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Users, Zap } from "lucide-react";

import heroImage from "../../assets/images/homepage-hero.png";
import Container from "../common/Container";

const Hero = () => {
  return (
    // <section className="relative overflow-hidden bg-white">
    //   {/* Background glow */}
    //   <div className="pointer-events-none absolute inset-0">
    //     <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />

    //     <div className="absolute left-1/3 top-1/2 h-[350px] w-[350px] rounded-full bg-indigo-50/60 blur-3xl" />
    //   </div>

    //   <Container>
    //     <div className="py-16 lg:py-20">
    //       {/* <div className="grid min-h-[calc(100vh-80px)] items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 lg:py-20"> */}
    //       <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
    //         {/* LEFT CONTENT */}
    //         <div className="relative z-10 max-w-[590px]">
    //           {/* Badge */}
    //           <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#315fcf]">
    //             <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
    //             We build digital experiences
    //           </div>

    //           {/* Heading */}
    //           <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0b1220] sm:text-5xl lg:text-[58px]">
    //             Your business
    //             <br />
    //             deserves a better
    //             <br />
    //             <span className="text-[#315fcf]">digital presence.</span>
    //           </h1>

    //           {/* Description */}
    //           <p className="mt-6 max-w-[530px] text-base leading-7 text-[#64748b] sm:text-lg">
    //             Modern websites, e-commerce experiences and web applications
    //             built for businesses and startups to grow, scale and stand out.
    //           </p>

    //           {/* Buttons */}
    //           <div className="mt-8 flex flex-wrap items-center gap-3">
    //             <Link
    //               to="/start-project"
    //               className="inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:bg-[#162033] hover:shadow-xl"
    //             >
    //               Start a Project
    //               <ArrowRight size={17} strokeWidth={2} />
    //             </Link>

    //             <Link
    //               to="/work"
    //               className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1220] transition-all duration-200 hover:border-[#315fcf] hover:text-[#315fcf]"
    //             >
    //               View Our Work
    //             </Link>
    //           </div>
    //         </div>

    //         {/* RIGHT IMAGE */}
    //         <div className="relative flex items-center justify-center lg:justify-end">
    //           <div className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl" />

    //           <img
    //             src={heroImage}
    //             alt="Modern web and digital product interface"
    //             className="relative z-10 w-full max-w-[680px] object-contain"
    //             fetchPriority="high"
    //             loading="lazy"
    //             decoding="async"
    //           />
    //         </div>
    //       </div>

    //       {/* Benefits */}
    //       {/* <div className="mx-auto w-full grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5"> */}
    //       <div className="mx-auto mt-12 grid w-full max-w-[900px] grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
    //         <div className="flex items-start gap-3">
    //           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf]">
    //             <Zap size={19} strokeWidth={2} />
    //           </div>

    //           <div>
    //             <h3 className="text-sm font-semibold text-[#0b1220]">
    //               Fast & Modern
    //             </h3>

    //             <p className="mt-1 text-xs leading-5 text-[#64748b]">
    //               High-performance solutions
    //             </p>
    //           </div>
    //         </div>

    //         <div className="flex items-start gap-3">
    //           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf]">
    //             <ShieldCheck size={19} strokeWidth={2} />
    //           </div>

    //           <div>
    //             <h3 className="text-sm font-semibold text-[#0b1220]">
    //               Business Focused
    //             </h3>

    //             <p className="mt-1 text-xs leading-5 text-[#64748b]">
    //               Built for real growth
    //             </p>
    //           </div>
    //         </div>

    //         <div className="flex items-start gap-3">
    //           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf]">
    //             <Users size={19} strokeWidth={2} />
    //           </div>

    //           <div>
    //             <h3 className="text-sm font-semibold text-[#0b1220]">
    //               Long-Term Partner
    //             </h3>

    //             <p className="mt-1 text-xs leading-5 text-[#64748b]">
    //               We're in it with you
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Container>
    // </section>

    // <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#eef5ff] to-[#dce9ff]">
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
  <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7da2ff] backdrop-blur-sm">
    <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
    We build digital experiences
  </div>

  {/* Heading */}
  <h1 className="text-[42px] font-bold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[60px]">
    Your business
    <br />
    deserves a better
    <br />
    <span className="text-[#4d7ff5]">
      digital presence.
    </span>
  </h1>

  {/* Description */}
  <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-[#a7b2c5] sm:text-base">
    Modern websites, e-commerce experiences and web applications
    built for businesses and startups to grow, scale and stand out.
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
      <p className="text-sm font-semibold text-white">
        Fast & Modern
      </p>

      <p className="mt-1 text-xs leading-5 text-[#8f9db3]">
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

      <p className="mt-1 text-xs leading-5 text-[#8f9db3]">
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

      <p className="mt-1 text-xs leading-5 text-[#8f9db3]">
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
