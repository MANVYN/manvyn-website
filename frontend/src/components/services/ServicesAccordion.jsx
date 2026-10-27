import { useState } from "react";

import Container from "../common/Container";
import { servicesData } from "../../data/services";




import { Plus, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";




function ServiceList({ title, items, t }) {
  return (
    <div className={`rounded-2xl border p-6 ${t.panel}`}>
      <h4 className={`text-sm font-semibold uppercase tracking-[0.12em] ${t.heading}`}>
        {title}
      </h4>

      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-[15px] leading-6 ${t.item}`}
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.check}`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };




const themes = {
  light: {
    row: "bg-white border-slate-200",
    rowOpen: "bg-slate-50",
    rowHover: "hover:bg-slate-50/70",
    bar: "bg-[#315fcf]",
    number: "text-slate-300",
    label: "text-slate-400",
    labelOpen: "text-[#315fcf]",
    title: "text-[#0b1220] group-hover:text-[#315fcf]",
    titleOpen: "text-[#315fcf]",
    desc: "text-[#64748b]",
    toggle: "border-slate-300 text-slate-500 group-hover:border-[#315fcf] group-hover:text-[#315fcf]",
    toggleOpen: "border-[#315fcf] bg-[#315fcf] text-white",
    glow: "bg-[#315fcf]/10",
    imgFrame: "",
    divider: "border-slate-200",
    heading: "text-[#0b1220]",
    item: "text-[#64748b]",
    check: "bg-[#315fcf]/10 text-[#315fcf]",
    panel: "bg-white border-slate-200",
    cta: "bg-[#0b1220] text-white hover:bg-[#162033]",
    ctaText: "text-[#64748b]",
  },
  dark: {
    row: "bg-[#0f1f45] border-white/10",
    rowOpen: "bg-[#14245c]",
    rowHover: "hover:bg-[#12225a]",
    bar: "bg-[#7ea3ff]",
    number: "text-white/20",
    label: "text-slate-400",
    labelOpen: "text-[#7ea3ff]",
    title: "text-white group-hover:text-[#7ea3ff]",
    titleOpen: "text-[#7ea3ff]",
    desc: "text-slate-300",
    toggle: "border-white/20 text-slate-300 group-hover:border-[#7ea3ff] group-hover:text-[#7ea3ff]",
    toggleOpen: "border-[#7ea3ff] bg-[#7ea3ff] text-[#0f1f45]",
    glow: "bg-[#7ea3ff]/20",
    imgFrame: "",
    divider: "border-white/10",
    heading: "text-white",
    item: "text-slate-300",
    check: "bg-[#7ea3ff]/15 text-[#7ea3ff]",
    panel: "bg-white/5 border-white/10",
    cta: "bg-white text-[#0f1f45] hover:bg-slate-100",
    ctaText: "text-slate-300",
  },
};


  return (

    <>
    


{/* // ...inside your component */}
<section className="bg-white">
  {servicesData.map((service, index) => {
    const isOpen = openIndex === index;
    const isDark = index % 2 === 1; // light first, then dark, then light...
    const imageLeft = index % 2 === 1;
    const t = isDark ? themes.dark : themes.light;
    const panelId = `service-panel-${service.id}`;

    return (
      <div
        key={service.id}
        className={`relative border-b transition-colors duration-300 ${t.row} ${
          isOpen ? t.rowOpen : t.rowHover
        }`}
      >
        {/* Accent bar */}
        <span
          aria-hidden="true"
          className={`absolute left-0 top-0 h-full w-1 origin-top transition-transform duration-500 ${t.bar} ${
            isOpen ? "scale-y-100" : "scale-y-0"
          }`}
        />

        {/* Clickable header */}
        <div
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => handleToggle(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToggle(index);
            }
          }}
          className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ea3ff] focus-visible:ring-inset"
        >
          <Container>
            <div
              className={`grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-16 ${
                imageLeft ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`text-5xl font-bold tabular-nums leading-none transition-colors duration-300 ${t.number}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* <span
                      className={`text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                        isOpen ? t.labelOpen : t.label
                      }`}
                    >
                      {service.label}
                    </span> */}
                  </div>

                  {/* Toggle */}
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? t.toggleOpen : t.toggle
                    }`}
                  >
                    <Plus
                      size={20}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-[135deg]" : "rotate-0"
                      }`}
                    />
                  </span>
                </div>

                <h3
                  className={`mt-6 text-4xl font-semibold tracking-tight transition-colors duration-300 ${
                    isOpen ? t.titleOpen : t.title
                  }`}
                >
                  {service.title}
                </h3>

                <p className={`mt-4 max-w-[560px] text-lg leading-7 ${t.desc}`}>
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="relative h-[250px] w-full">
                <div
                  aria-hidden="true"
                  className={`absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-500 ${t.glow} ${
                    isOpen ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                  }`}
                />

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="relative h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </Container>
        </div>

        {/* Accordion content */}
        <div
          id={panelId}
          role="region"
          className={`grid transition-[grid-template-rows,opacity,visibility] duration-500 ease-in-out ${
            isOpen
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <Container>
              <div className={`border-t pb-10 pt-8 ${t.divider}`}>
                <div className="grid gap-5 lg:grid-cols-3">
                  <ServiceList title="Who it's for" items={service.forWho} t={t} />
                  <ServiceList title="Typical features" items={service.features} t={t} />
                  <ServiceList title="Business value" items={service.businessValue} t={t} />
                </div>

                {/* CTA row */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className={`text-base ${t.ctaText}`}>
                    Interested in {service.title.toLowerCase()}? Let's talk about
                    your project.
                  </p>

                  {/* <Link
                    to="/start-project"
                    className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition ${t.cta}`}
                  >
                    Start a project
                    <ArrowRight size={16} />
                  </Link> */}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  })}
</section>

</>
  );
};

export default ServicesAccordion;
