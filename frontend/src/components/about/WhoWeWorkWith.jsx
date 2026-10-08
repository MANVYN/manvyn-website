import Container from "../common/Container";

const audiences = [
  {
    number: "01",
    title: "Small Businesses",
    description: "Build a strong digital foundation.",
  },
  {
    number: "02",
    title: "Startups",
    description: "Turn ideas into digital products.",
  },
  {
    number: "03",
    title: "Growing Businesses",
    description: "Improve and scale digital operations.",
  },
  {
    number: "04",
    title: "Teams & Organizations",
    description: "Create better systems for everyday work.",
  },
];

const WhoWeWorkWith = () => {
  return (
    // <section className="bg-[#f8fafc] py-20 lg:py-28">
    <section className="bg-[#0f1f45] py-14 lg:py-22">
      <Container>
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#4d7ff5]/25 bg-[#4d7ff5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a8beff] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
            Who We Work With
          </div>

          <h2 className="mt-5 max-w-[700px] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Digital solutions for businesses at every stage.
          </h2>
        </div>

        <div className="mt-14 grid border-y border-slate-200 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <div
              key={audience.number}
              className={`group py-8 lg:px-7 lg:py-10 ${
                index !== 0 ? "lg:border-l lg:border-slate-200" : ""
              } ${
                index !== audiences.length - 1
                  ? "border-b border-slate-200 lg:border-b-0"
                  : ""
              }`}
            >
              <span className="text-sm font-bold text-white  group-hover:text-[#315fcf]">
                {audience.number}
              </span>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#315fcf]">
                {audience.title}
              </h3>

              <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#64748b]">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoWeWorkWith;
