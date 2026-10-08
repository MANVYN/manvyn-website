import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import { technologyConfig } from "../../data/projects.js";
import { capabilitiesIcons } from "../../data/projects.js";

const FeaturedProject = ({ project }) => {
  return (
    <section className="bg-white py-8 lg:py-10">
      <Container>
        <div className="relative h-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-[#eef2f7] sm:h-[540px] lg:h-[480px]">
          {/* Full Background Image */}
          <img
            src={project.heroImage}
            alt={`${project.title} project`}
            loading="lazy"
            decoding="async"
            // className="absolute inset-0 h-full w-full object-cover object-center"
            className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
          />

          {/* Background → Image blend — desktop only */}

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[150%] bg-gradient-to-r from-[#f8fafc] from-0% via-[#f8fafc] via-[30%] to-transparent to-[42%] lg:block" />

          {/* Content */}
          <div className="relative z-10 flex h-full w-full items-center">
            <div className="w-full max-w-[560px] p-7 sm:p-9 lg:p-10">
              {/* Featured Label */}
              <span className="inline-flex rounded-full bg-[#dce8ff] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#315fcf]">
                Featured Project
              </span>

              {/* Category */}
              <span className="mt-5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
                {project.category}
              </span>

              {/* Title */}
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#0f1f45] sm:text-4xl">
                {project.title}
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-[470px] text-sm leading-6 text-[#64748b] sm:text-base">
                {project.description}
              </p>

              {/* Capabilities - exactly 4 */}
              {project.capabilities?.length > 0 && (
                <div className="mt-8 grid max-w-[500px] grid-cols-2 gap-x-6 gap-y-4">
                  {project.capabilities.slice(0, 4).map((capability) => {
                    const Icon = capabilitiesIcons[capability.icon];

                    return (
                      <div
                        key={capability.title}
                        className="flex items-center gap-2.5"
                      >
                        {Icon && (
                          <Icon
                            size={20}
                            strokeWidth={1.8}
                            className="shrink-0 text-[#315fcf]"
                          />
                        )}

                        <p className="text-xs font-medium leading-4 text-[#475569]">
                          {capability.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
              {/* Technologies */}
              <div className="mt-5 flex w-full flex-wrap gap-2">
                {project.technologies?.slice(0, 4).map((technology) => {
                  const config = technologyConfig[technology];
                  const Icon = config?.icon;

                  return (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-[#475569] shadow-sm ring-1 ring-slate-200/80"
                    >
                      {Icon && (
                        <Icon size={14} style={{ color: config.color }} />
                      )}

                      {technology}
                    </span>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                to={project.link}
                className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#315fcf] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2854b8]"
              >
                View Case Study
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Extra edge fade to make image merge naturally */}
          {/* <div className="pointer-events-none absolute inset-y-0 left-[42%] hidden w-[20%] bg-gradient-to-r from-[#f8fafc]/70 to-transparent lg:block" /> */}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProject;
