import { ArrowRight, Code2, Monitor, ShoppingCart, Wrench } from "lucide-react";

import Container from "../common/Container";
import { services } from "../../data/services";

const Services = () => {
  return (
    <section className="bg-white py-20 lg:py-24">

      <Container>
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
              What We Build
            </h2>

            <p className="mt-2 text-sm text-[#64748b] sm:text-base">
              Digital solutions tailored to your business goals.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#315fcf] transition-colors hover:text-[#244aa8]"
          >
            Explore All Services
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Service cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const icons = {
              Monitor,
              ShoppingCart,
              Code2,
              Wrench,
            };
            const Icon = icons[service.icon];

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-slate-900/5"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf] transition-colors group-hover:bg-[#315fcf] group-hover:text-white">
                  <Icon size={21} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold text-[#0b1220]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748b]">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b1220] transition-colors group-hover:text-[#315fcf]"
                >
                  Learn More
                  <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
