import Container from "../common/Container";

const WhoWeAre = () => {
  return (
    // <section className="bg-[#f8fafc] py-20 lg:py-28">
    <section className="bg-[#f8fafc] py-14 lg:py-22">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
              Who We Are
            </div>

            <h2 className="mt-5 max-w-[650px] text-4xl font-semibold tracking-tight text-[#0f1f45] sm:text-5xl">
              A development partner for businesses that want to grow.
            </h2>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-[#64748b] sm:text-lg">
              MANVYN is a web development studio focused on building practical
              digital solutions for businesses and startups. We combine
              thoughtful design, modern technology and a clear understanding of
              your business goals.
            </p>
          </div>

          {/* Right */}
          <div className="border-l border-slate-200 pl-8 lg:pl-12">
            <h3 className="text-xl font-semibold text-[#0f1f45]">
              More than development.
            </h3>

            <div className="mt-7 space-y-5">
              {[
                "Business goals before code",
                "Solutions built around your needs",
                "Scalable and maintainable systems",
                "Clear and collaborative communication",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="h-px w-6 bg-[#315fcf]" />
                  <span className="text-sm text-[#475569] sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
