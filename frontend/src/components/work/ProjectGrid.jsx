import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import { Link } from "react-router-dom";

  const ProjectGrid = ({ projects }) => {
  return (
    <section className="bg-white pb-20 lg:pb-24">
      <Container>
        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#315fcf]/40 hover:shadow-lg hover:shadow-slate-900/5"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img
                  src={project.heroImage}
                  alt={`${project.title} project`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#315fcf]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0b1220]">
                  {project.title}
                  <span className="font-normal text-[#64748b]">
                    {" "}
                    – {project.subtitle}
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748b]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs font-medium text-[#475569]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/work/${project.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#315fcf] transition-colors hover:text-[#244aa8]"
                >
                  View Project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectGrid;
