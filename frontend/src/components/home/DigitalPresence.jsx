import {
  ArrowRight,
  BarChart3,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "../common/Container";

const benefits = [
  {
    title: "Build Trust",
    description: "Show customers you're legitimate and professional.",
    icon: ShieldCheck,
  },
  {
    title: "Reach More Customers",
    description: "Get discovered online and grow your audience.",
    icon: BarChart3,
  },
  {
    title: "Showcase Your Business",
    description: "Highlight what makes your business different.",
    icon: Users,
  },
  {
    title: "Turn Visitors into Enquiries",
    description: "A great website helps you win more business.",
    icon: MessageCircle,
  },
];

const DigitalPresence = () => {
  return (
    <section className="bg-[#e7ebf1] py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Left */}
          <div className="max-w-[360px]">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0b1220] sm:text-4xl">
              Why Your Digital
              <br />
              Presence Matters
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#64748b] sm:text-base">
              Your website is often the first impression. Make it count.
            </p>

            <a
              href="/start-project"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#162033]"
            >
              Start a Project
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right */}
          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf]">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#0b1220]">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-[#64748b]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DigitalPresence;
