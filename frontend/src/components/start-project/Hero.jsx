// import Container from "../common/Container";

// const StartProjectHero = () => {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#eef4ff] py-20 lg:py-28">
//       {/* Background glow */}
//       <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-[#315fcf]/10 blur-3xl" />
//       <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[#3b82b6]/10 blur-3xl" />

//       <Container>
//         <div className="relative mx-auto max-w-[900px] text-center">
//           <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
//             Start a Project
//           </span>

//           <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-[#0b1220] sm:text-6xl lg:text-7xl">
//             Let's build something
//             <span className="block text-[#315fcf]">
//               that moves your business forward.
//             </span>
//           </h1>

//           <p className="mx-auto mt-7 max-w-[700px] text-base leading-7 text-[#64748b] sm:text-lg">
//             Tell us a little about your project, and we'll get back to you
//             with the next steps.
//           </p>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default StartProjectHero;

import Container from "../common/Container";
import Hero from "../../assets/images/start-project-hero.png";

const StartProjectHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#14223d] py-20 lg:py-24">
      {/* Background glow */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#1d4ed8]/15 blur-[120px]" />
      <div className="absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-[#2563eb]/10 blur-[140px]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-[620px]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4d7ff5]">
              Start a Project
            </span>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let's build something
              <span className="block text-[#4d7ff5]">
                that moves your business forward.
              </span>
            </h1>

            <p className="mt-7 max-w-[560px] text-base leading-7 text-[#a7b2c5] sm:text-lg">
              Tell us a little about your project, and we'll get back to you
              with the next steps.
            </p>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="relative flex items-center justify-center lg:-mr-12">
            {/* Image glow */}
            <div className="absolute right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#2563eb]/20 blur-[100px]" />

            <img
              src={Hero}
              alt="MANVYN digital solutions"
              className="relative z-10 w-full max-w-[620px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartProjectHero;
