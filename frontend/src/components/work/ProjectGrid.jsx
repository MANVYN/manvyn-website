import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import { technologyConfig } from "../../data/projects.js";

const ProjectGrid = ({ projects }) => {
  return (
    <section className="bg-white pb-20 lg:pb-24">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              // className="group  h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#315fcf]/30 hover:shadow-lg hover:shadow-slate-900/5 sm:h-[320px]"
              className="group h-auto min-h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] transition-all duration-300 hover:-translate-y-1 hover:border-[#315fcf]/30 hover:shadow-lg hover:shadow-slate-900/5 sm:min-h-[320px]"
            >
              <div className="grid h-full gap-4 p-2 sm:grid-cols-[1.35fr_1fr]">
                {/* Image */}
                <div className="h-[220px] min-h-0 overflow-hidden rounded-2xl bg-slate-50 sm:h-full py-3">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} project`}
                    loading="lazy"
                    decoding="async"
                    // className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] py-4 rounded-2xl"
                    className="h-full w-full rounded-2xl object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Content */}
                <div className="flex min-h-0 flex-col justify-center overflow-hidden py-2 pr-2">
                  {/* Category */}
                  <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#315fcf]">
                    {project.category}
                  </p>
                  {/* Title */}
                  <h3 className="mt-2 line-clamp-2 shrink-0 text-xl font-semibold tracking-tight text-[#0f1f45]">
                    {project.title}
                  </h3>

                  {/* Description — MAX 3 LINES */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#64748b]">
                    {project.description}
                  </p>

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
                    to={`/work/${project.slug}`}
                    className="mt-6 inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-[#315fcf] transition-colors hover:text-[#244aa8]"
                  >
                    View Case Study
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectGrid;
