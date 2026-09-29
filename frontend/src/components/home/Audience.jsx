import {
  Building2,
  Rocket,
  Store,
  Users,
} from "lucide-react";

import Container from "../common/Container";

const audiences = [
  {
    title: "Small Businesses",
    description:
      "Build a professional online presence that helps customers discover and trust your business.",
    icon: Store,
  },
  {
    title: "Startups",
    description:
      "Launch your idea with a digital product that can grow alongside your business.",
    icon: Rocket,
  },
  {
    title: "Growing Businesses",
    description:
      "Upgrade your existing digital presence and create better experiences for your customers.",
    icon: Building2,
  },
  {
    title: "Teams & Organizations",
    description:
      "Create custom web solutions that simplify workflows and support your team's needs.",
    icon: Users,
  },
];

const Audience = () => {
  return (
    <section className="bg-white py-20 lg:py-24">

      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#315fcf]">
            Who We Work With
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
            Built around your business
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#64748b] sm:text-base">
            Whether you're starting from scratch or ready to improve what you
            already have, we build around your goals.
          </p>
        </div>

        {/* Audience cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <div
                key={audience.title}
                className="rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-slate-900/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf]">
                  <Icon size={21} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0b1220]">
                  {audience.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748b]">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Audience;