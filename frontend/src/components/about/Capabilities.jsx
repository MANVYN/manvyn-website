import Container from "../common/Container";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRazorpay,
  SiWhatsapp,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
} from "react-icons/si";

const technologyConfig = {
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  "Node.js": {
    icon: SiNodedotjs,
    color: "#339933",
  },

  Express: {
    icon: SiExpress,
    color: "#000000",
  },

  "REST APIs": {
    icon: SiPostman,
    color: "#FF6C37",
  },

  MongoDB: {
    icon: SiMongodb,
    color: "#47A248",
  },

  "Data Modelling": {
    icon: SiMongodb,
    color: "#47A248",
  },

  "API Integration": {
    icon: SiPostman,
    color: "#FF6C37",
  },

  Payments: {
    icon: SiRazorpay,
    color: "#3395FF",
  },

  WhatsApp: {
    icon: SiWhatsapp,
    color: "#25D366",
  },

  "Third-party APIs": {
    icon: SiPostman,
    color: "#FF6C37",
  },

  Git: {
    icon: SiGit,
    color: "#F05032",
  },

  "Cloud Deployment": {
    icon: SiVercel,
    color: "#000000",
  },
};

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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
            Technology & Capabilities
          </div>

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
                {item.technologies.map((technology) => {
                  const config = technologyConfig[technology];
                  const Icon = config?.icon;

                  return (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-2 text-md font-medium text-[#475569]"
                    >
                      {Icon && (
                        <Icon size={18} style={{ color: config.color }} />
                      )}

                      {technology}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologyCapabilities;
