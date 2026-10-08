import Container from "../common/Container";

const WorkHero = () => {
  return (
    <section className="overflow-hidden bg-[#f8fafc] py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
              Our Work
            </div>

            <h1 className="mt-5 max-w-[650px] text-4xl font-semibold leading-[1.08] tracking-tight text-[#0f1f45] sm:text-5xl lg:text-6xl">
              Digital products
              <br />
              built to solve{" "}
              <span className="text-[#315fcf]">real problems.</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-base leading-7 text-[#64748b] sm:text-lg">
              A selection of websites, e-commerce experiences and web
              applications we've designed and developed for businesses.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto h-[320px] w-full max-w-[520px]">
            {/* Background decoration */}
            <div className="absolute right-10 top-4 h-56 w-56 rounded-full bg-[#dce8ff] blur-3xl" />

            {/* Card 1 */}
            <div className="absolute left-4 top-5 w-[270px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,31,69,0.08)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#315fcf]">
                  Digital Experiences
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf3ff] text-[#315fcf]">
                  ↗
                </span>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <div className="h-16 w-8 rounded-t-md bg-[#315fcf]/20" />
                <div className="h-24 w-8 rounded-t-md bg-[#315fcf]/40" />
                <div className="h-20 w-8 rounded-t-md bg-[#315fcf]/60" />
                <div className="h-32 w-8 rounded-t-md bg-[#315fcf]" />
              </div>

              <p className="mt-5 text-sm font-medium text-[#0f1f45]">
                Websites & E-commerce
              </p>
            </div>

            {/* Card 2 */}
            <div className="absolute bottom-2 right-2 w-[270px] rounded-2xl border border-slate-200 bg-[#0f1f45] p-6 shadow-[0_25px_60px_rgba(15,31,69,0.16)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
                  Business Solutions
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                  ↗
                </span>
              </div>

              <div className="mt-7 space-y-3">
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div className="h-2 w-[78%] rounded-full bg-[#315fcf]" />
                </div>

                <div className="h-2 w-[82%] rounded-full bg-white/10">
                  <div className="h-2 w-[55%] rounded-full bg-blue-300" />
                </div>

                <div className="h-2 w-[65%] rounded-full bg-white/10">
                  <div className="h-2 w-[85%] rounded-full bg-white/70" />
                </div>
              </div>

              <p className="mt-5 text-sm font-medium text-white">
                Web Applications & Custom Development
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkHero;
