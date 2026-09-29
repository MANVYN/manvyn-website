import Container from "../common/Container";

const capabilities = [
  {
    title: "Frontend",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database",
    technologies: ["MongoDB", "Data Modelling", "API Integration"],
  },
  {
    title: "Integrations & Infrastructure",
    technologies: [
      "Payments",
      "WhatsApp",
      "Third-party APIs",
      "Git",
      "Cloud Deployment",
    ],
  },
];

const TechnologyCapabilities = () => {
  return (
    // <section className="bg-white py-20 lg:py-28">
    <section className="bg-white py-14 lg:py-22">
      <Container>
        {/* Heading */}
        <div className="max-w-[700px]">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#315fcf]">
            Technology & Capabilities
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0f1f45] sm:text-5xl">
            The technology behind what we build.
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-7 text-[#64748b] sm:text-lg">
            We choose technologies based on the needs of the project, with a
            focus on performance, maintainability and long-term growth.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mt-14 border-t border-slate-200">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="grid gap-5 border-b border-slate-200 py-7 lg:grid-cols-[280px_1fr] lg:items-center"
            >
              <h3 className="text-lg font-semibold text-[#0f1f45]">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm font-bold text-[#315fcf] sm:text-base"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologyCapabilities;