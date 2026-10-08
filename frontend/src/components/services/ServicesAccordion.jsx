import { useState } from "react";

import Container from "../common/Container";
import { servicesData } from "../../data/services";

const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-2 lg:py-2">
      {/* <Container> */}
      {/* <div className="mx-auto max-w-[1100px]"> */}
      {servicesData.map((service, index) => {
        const isOpen = openIndex === index;
        const imageLeft = index % 2 === 1;

        return (
          <div
            key={service.id}
            className={`border-b border-slate-200 transition-colors duration-300 ${
              isOpen ? "bg-slate-50" : "hover:bg-slate-50"
            }`}
          >
            {/* Full-width clickable area */}
            <div
              onClick={() => handleToggle(index)}
              className="group cursor-pointer"
            >
              <Container>
                {/* Header */}
                <div
                  className={`grid items-center gap-8 py-10 lg:grid-cols-2 ${
                    imageLeft ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Title + Subtitle */}
                  <div>
                    <span
                      className={`text-2xl font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                        isOpen ? "text-[#315fcf]" : "text-slate-400"
                      }`}
                    >
                      {service.label}
                    </span>

                    <h3
                      className={`mt-5 text-4xl font-semibold tracking-tight transition-colors duration-300 ${
                        isOpen
                          ? "text-[#315fcf]"
                          : "text-[#0b1220] group-hover:text-[#315fcf]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-[560px] pr-18 text-lg leading-6 text-[#64748b]">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="h-[250px] w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </Container>
            </div>

            {/* Accordion Content - also full width */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-400 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <Container>
                  <div className="grid gap-8 border-t border-slate-200 py-8 lg:grid-cols-[40%_30%_30%]">
                    {/* Who it's for */}
                    <div>
                      <h4 className="text-md font-semibold text-[#0b1220]">
                        Who it's for
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {service.forWho.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-md leading-6 text-[#64748b]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#315fcf]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Typical features */}
                    <div>
                      <h4 className="text-md font-semibold text-[#0b1220]">
                        Typical features
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-md leading-6 text-[#64748b]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#315fcf]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business value */}
                    <div>
                      <h4 className="text-md font-semibold text-[#0b1220]">
                        Business value
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {service.businessValue.map((value) => (
                          <li
                            key={value}
                            className="flex items-start gap-3 text-md leading-6 text-[#64748b]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#315fcf]" />
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        );
      })}
      {/* </div> */}
      {/* </Container> */}
    </section>
  );
};

export default ServicesAccordion;
