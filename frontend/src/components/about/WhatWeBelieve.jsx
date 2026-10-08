import Container from "../common/Container";

const beliefs = [
  {
    number: "01",
    title: "Build with purpose",
    description:
      "Every feature should solve a real business problem and create meaningful value.",
  },
  {
    number: "02",
    title: "Keep it simple",
    description:
      "Good software should be easy to understand, use and maintain.",
  },
  {
    number: "03",
    title: "Design for people",
    description:
      "Technology should make things easier and more intuitive for the people using it.",
  },
  {
    number: "04",
    title: "Build for growth",
    description:
      "We create systems that can evolve with your business as it grows.",
  },
];

const WhatWeBelieve = () => {
  return (
    // <section className="bg-[#0f1f45] py-20 lg:py-28">
    <section className="bg-[#0f1f45] py-14 lg:py-22">
      <Container>
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#4d7ff5]/25 bg-[#4d7ff5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a8beff] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
            What We Believe
          </div>

          <h2 className="mt-5 max-w-[650px] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Principles that guide how we build.
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-7 text-slate-400 sm:text-lg">
            Good digital products aren't just about technology. They're about
            solving the right problems, keeping things simple and creating value
            that lasts.
          </p>
        </div>

        <div className="mt-14 grid border border-white/10 sm:grid-cols-2">
          {beliefs.map((belief, index) => (
            <div
              key={belief.number}
              className={`group px-7 py-4 lg:px-10 lg:py-5 ${
                index % 2 === 0 ? "sm:border-r sm:border-white/10" : ""
              } ${index < 2 ? "border-b border-white/10" : ""}`}
            >
              <span className="text-sm font-bold text-white group-hover:text-[#315fcf]">
                {belief.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white lg:text-2xl group-hover:text-[#315fcf]">
                {belief.title}
              </h3>

              <p className="mt-3 max-w-[420px] text-sm leading-6 text-slate-400 lg:text-base">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeBelieve;
