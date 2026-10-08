import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";
import { projects } from "../data/projects.js";

import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowRight } from "lucide-react";
import { technologyConfig } from "../data/projects.js";
import { capabilitiesIcons } from "../data/projects.js";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  // inside component

  const [activeIndex, setActiveIndex] = useState(0);

  const gallery = project.gallery || [];

  useEffect(() => {
    if (gallery.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [gallery.length]);

  const activeItem = gallery[activeIndex];

  const thumbnails = Array.from(
    { length: Math.min(2, gallery.length - 1) },
    (_, index) => gallery[(activeIndex + index + 1) % gallery.length],
  );

  if (!project) {
    return (
      <section className="bg-white py-32">
        <Container>
          <h1 className="text-3xl font-bold text-[#0b1220]">
            Project not found
          </h1>

          <Link
            to="/work"
            className="mt-6 inline-flex text-sm font-semibold text-[#315fcf]"
          >
            Back to Work
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        path={`/work/${project.slug}`}
      />

      {/* PROJECT HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#e7f0ff]">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-100/50 blur-3xl" />

          <div className="absolute left-1/3 top-1/2 h-[350px] w-[350px] rounded-full bg-indigo-50/60 blur-3xl" />
        </div>

        <Container>
          <div className="relative z-10 py-8 lg:py-12">
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm text-slate-500">
              <Link
                to="/work"
                className="transition-colors hover:text-[#315fcf]"
              >
                Work
              </Link>

              <span>/</span>

              <span className="text-slate-900">{project.title}</span>
            </div>

            {/* Hero content */}
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
              {/* LEFT */}
              <div className="max-w-[540px]">
                {/* Category */}

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
                  {project.category}
                </div>

                {/* Title */}
                <h1 className="text-5xl font-bold tracking-[-0.04em] text-[#0b1220] sm:text-5xl">
                  {project.title}
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-[500px] text-lg leading-8 text-[#64748b]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => {
                    const config = technologyConfig[technology];
                    const Icon = config?.icon;

                    return (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                      >
                        {Icon && (
                          <Icon size={14} style={{ color: config.color }} />
                        )}

                        {technology}
                      </span>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162033]"
                    >
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1220] transition hover:border-[#315fcf] hover:text-[#315fcf]"
                    >
                      View Code
                      <FaGithub size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT — PROJECT IMAGE */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-200/30 blur-3xl" />

                <img
                  src={project.heroImage}
                  alt={`${project.title} ${project.category} project`}
                  width="1536"
                  height="1024"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  // className="relative z-10 h-[380px] w-full max-w-[700px] rounded-2xl object-cover object-center drop-shadow-[0_30px_60px_rgba(37,99,235,0.16)] [mask-image:radial-gradient(ellipse_at_center,black_92%,transparent_100%)]"
                  className="relative z-10 h-[380px] w-full max-w-[700px] rounded-2xl object-cover object-center drop-shadow-[0_30px_60px_rgba(37,99,235,0.16)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_2%,black_98%,transparent_100%),linear-gradient(to_right,transparent_0%,black_2%,black_98%,transparent_100%)] [mask-composite:intersect]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* THE CHALLENGE */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
                The Challenge
              </div>

              <h2 className="mt-4 max-w-[520px] text-3xl font-bold leading-tight tracking-tight text-[#0b1220] sm:text-4xl">
                {project.challenge.title}
              </h2>
            </div>

            {/* RIGHT */}
            <div className="flex items-center lg:border-l lg:border-slate-200 lg:pl-16">
              <p className="max-w-[650px] text-lg leading-8 text-[#64748b]">
                {project.challenge.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE BUILT */}
      <section className="bg-[#f8fafc] py-20 lg:py-24">
        <Container>
          {/* Section heading */}
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
              What We Built
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
              A complete digital experience built around the product.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#64748b]">
              From discovering products to managing orders, the platform brings
              the core e-commerce experience together in one system.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {project.capabilities.map((capability, index) => {
              const Icon = capabilitiesIcons[capability.icon];

              return (
                <div
                  key={capability.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-300">
                      0{index + 1}
                    </span>

                    {Icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef3ff] text-[#315fcf] transition-all duration-300 group-hover:bg-[#315fcf] group-hover:text-white">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold text-[#0b1220]">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64748b]">
                      {capability.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#315fcf] transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* PRODUCT EXPERIENCE */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          {/* Heading */}
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
              Product Experience
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
              Designed to keep the shopping experience simple.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#64748b]">
              Every part of ShopSphere was designed to make browsing, purchasing
              and managing orders feel clear and effortless.
            </p>
          </div>

          {/* Screens */}
          {/* Gallery */}

          <div className="mt-14">
            <div className="grid items-stretch gap-6 lg:grid-cols-[1.2fr_1fr]">
              {/* COLUMN A — BIG IMAGE */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#0c2e6f] p-2 sm:p-2">
                <div className="h-full overflow-hidden rounded-2xl bg-white">
                  <img
                    key={activeItem.image}
                    src={activeItem.image}
                    alt={`${project.title} - ${activeItem.title}`}
                    width="1400"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="block h-full w-full object-contain transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* COLUMN B — CONTENT + TWO IMAGES */}
              <div className="flex min-h-full flex-col">
                {/* Content */}
                <div className="flex-1">
                  <span className="text-sm font-semibold text-[#315fcf]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220]">
                    {activeItem.title}
                  </h3>

                  <p className="mt-4 max-w-[520px] text-base leading-7 text-[#64748b]">
                    {activeItem.description}
                  </p>
                </div>

                {/* Two Images */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {thumbnails.map((item) => {
                    const itemIndex = gallery.findIndex(
                      (galleryItem) => galleryItem.image === item.image,
                    );

                    return (
                      <button
                        key={item.image}
                        type="button"
                        onClick={() => setActiveIndex(itemIndex)}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 transition-all duration-300 hover:border-[#315fcf]"
                      >
                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                          <img
                            src={item.image}
                            alt={`${project.title} - ${item.title}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#f8fafc] py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
                Key Features
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
                Built with the features needed to run the platform.
              </h2>

              <p className="mt-5 max-w-[480px] text-lg leading-8 text-[#64748b]">
                ShopSphere brings together the essential tools required for
                customers, administrators and day-to-day platform management.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 border-b border-slate-200 py-5 sm:px-5"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-[#315fcf]">
                    {index + 1}
                  </span>

                  <span className="text-sm font-medium leading-6 text-[#0f172a]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#315fcf]/15 bg-[#315fcf]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#315fcf]" />
                Technology
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
                A modern stack built for flexibility and scale.
              </h2>

              <p className="mt-5 max-w-[480px] text-lg leading-8 text-[#64748b]">
                ShopSphere uses a modern full-stack architecture to keep the
                application maintainable, responsive and ready to evolve.
              </p>
            </div>

            {/* RIGHT */}
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {project.stack.map((item) => {
                const config = technologyConfig[item.technology];
                const Icon = config?.icon;

                return (
                  <div
                    key={item.category}
                    className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:items-center"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      {item.category}
                    </p>

                    <div className="flex items-start gap-3">
                      {Icon && (
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ff]">
                          <Icon
                            size={18}
                            strokeWidth={1.8}
                            style={{ color: config.color }}
                          />
                        </div>
                      )}

                      <div>
                        <h3 className="text-base font-bold text-[#0b1220]">
                          {item.technology}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-[#64748b]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-[#0b1220] px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-[#315fcf]/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              {/* Content */}
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#4d7ff5]/25 bg-[#4d7ff5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a8beff] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
                  Have a product idea like this?
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let&apos;s build it together.
                </h2>

                <p className="mt-4 max-w-[550px] text-base leading-7 text-slate-400">
                  Turn your idea into a powerful digital product built around
                  your business goals.
                </p>
              </div>

              {/* CTA */}
              <Link
                to="/start-project"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1220] shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Start a Project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetails;
