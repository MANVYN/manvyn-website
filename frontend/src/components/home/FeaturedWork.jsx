import {
  ArrowRight,
  ExternalLink,
  ShoppingCart,
  Users,
  Car,
} from "lucide-react";
import { Link } from "react-router-dom";

import { projects, projectCategories } from "../../data/projects";
import Container from "../common/Container";

const FeaturedWork = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
              Selected Work
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0b1220] sm:text-4xl">
              Built for real businesses
            </h2>

            <p className="mt-3 max-w-[560px] text-sm leading-6 text-[#64748b] sm:text-base">
              A look at the digital experiences and applications we build.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#315fcf] transition-colors hover:text-[#244aa8]"
          >
            View All Work
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article
              key={project.title}
              className="p-2 group overflow-hidden rounded-2xl border border-slate-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(11,18,32,0.08)]"
            >
              {/* Project image */}
              <Link
                to={`/work/${project.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-slate-100 rounded-2xl "
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Open icon */}
                <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/95 text-[#0b1220] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ExternalLink size={16} />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 sm:p-5">
                {/* Category */}

                <div className="inline-flex items-center gap-2 rounded-full border border-[#cdd9f2] bg-[#f1f5ff] px-3 py-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
                    {(() => {
                      const category = projectCategories.find(
                        (item) => item.name === project.category,
                      );

                      const Icon = category?.icon;

                      return Icon ? <Icon size={13} strokeWidth={2} /> : null;
                    })()}
                  </span>

                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#315fcf]">
                    {project.category}
                  </p>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#0b1220]">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#64748b]">
                  {project.description}
                </p>

                {/* CTA */}
                <Link
                  to={`/work/${project.slug}`}
                  className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#0b1220] transition-colors hover:text-[#315fcf]"
                >
                  View Project
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef3ff] text-[#315fcf] transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWork;
