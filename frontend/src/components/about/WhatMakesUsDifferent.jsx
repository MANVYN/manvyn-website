import Container from "../common/Container";

const differences = [
  {
    number: "01",
    title: "Business-first thinking",
    description: "We understand the problem before deciding on the technology.",
  },
  {
    number: "02",
    title: "Modern technology",
    description:
      "We use current tools and development practices to build reliable digital products.",
  },
  {
    number: "03",
    title: "Clear communication",
    description: "You always know what we're working on, what's next and why.",
  },
  {
    number: "04",
    title: "Long-term mindset",
    description:
      "We build with maintainability, scalability and future growth in mind.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    // <section className="bg-white py-20 lg:py-28">
    <section className="bg-[#0f1f45] py-14 lg:py-22">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Heading */}
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#4d7ff5]/25 bg-[#4d7ff5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a8beff] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
              Why MANVYN
            </div>

            <h2 className="mt-5 max-w-[500px] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Built around your business, not just your requirements.
            </h2>
          </div>

          {/* Points */}
          <div className="border-t border-slate-200">
            {differences.map((item) => (
              <div
                key={item.number}
                className="group grid gap-4 border-b border-slate-200 py-7 transition-colors duration-300 sm:grid-cols-[60px_1fr] sm:gap-6"
              >
                <span className="text-sm font-bold text-white group-hover:text-[#315fcf]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#315fcf]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[600px] text-sm leading-6 text-[#64748b] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatMakesUsDifferent;
