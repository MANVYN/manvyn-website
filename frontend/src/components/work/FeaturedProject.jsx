import { ArrowRight, BarChart3, CreditCard, ShoppingCart } from "lucide-react";
import Container from "../common/Container";
import {Link} from "react-router-dom"

const FeaturedProject = ({project}) => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-7 lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

            {/* Project Image */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img
                src={project.heroImage}
                alt={`${project.title} project`}
                loading="lazy"
                decoding="async"
                className="block aspect-[16/10] w-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
                Featured Project
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0f1f45] sm:text-4xl">
                {project.title} – {project.subtitle}
              </h2>

              <p className="mt-5 text-base leading-7 text-[#64748b]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#475569] ring-1 ring-slate-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Features */}
              {project.features && (
                <div className="mt-7 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {project.features.map((feature, index) => {
                    const icons = [ShoppingCart, CreditCard, BarChart3];
                    const Icon = icons[index] || BarChart3;

                    return (
                      <div key={feature}>
                        <Icon size={21} className="text-[#315fcf]" />

                        <p className="mt-2 text-xs font-medium leading-5 text-[#475569]">
                          {feature}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              <Link 
              to = {project.link}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0f1f45] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#162033]">
                View Project
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProject;