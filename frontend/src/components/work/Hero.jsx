import Container from "../common/Container";
import Hero from "../../assets/images/work/work-hero.png"

const WorkHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8fafc] via-white to-[#eef4ff] py-16 lg:py-22">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          
          {/* Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
              Our Work
            </span>

            <h1 className="mt-6 max-w-[720px] text-5xl font-semibold leading-[1.05] tracking-tight text-[#0f1f45] sm:text-6xl lg:text-7xl">
              Digital products built
              <span className="block text-[#315fcf]">
                to solve real problems.
              </span>
            </h1>

            <p className="mt-7 max-w-[620px] text-base leading-7 text-[#64748b] sm:text-lg">
              A selection of websites, e-commerce experiences and web
              applications we've designed and developed for businesses.
            </p>
          </div>

          {/* Visual */}
          {/* <div className="hidden lg:flex lg:justify-end">
            <div className="relative h-[360px] w-full max-w-[540px] overflow-hidden">
              <div className="absolute right-0 top-10 h-[260px] w-[420px] rounded-3xl border border-[#315fcf]/20 bg-white/70 shadow-xl rotate-3" />

              <div className="absolute right-12 top-20 h-[230px] w-[390px] rounded-3xl border border-slate-200 bg-white shadow-xl -rotate-3">
                <div className="flex h-full items-end gap-3 p-6">
                  <div className="h-[55%] w-2/5 rounded-lg bg-[#0f1f45]" />
                  <div className="flex h-[75%] flex-1 items-end gap-2">
                    <div className="h-[45%] w-full rounded bg-[#315fcf]/30" />
                    <div className="h-[70%] w-full rounded bg-[#315fcf]/50" />
                    <div className="h-full w-full rounded bg-[#315fcf]" />
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#315fcf]/10 blur-2xl" />
            </div>
          </div> */}

          <div className="hidden lg:flex lg:justify-end">
            <div className="relative h-[360px] w-full max-w-[540px]">
              <img
                src={Hero}
                alt="MANVYN project showcase"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default WorkHero;