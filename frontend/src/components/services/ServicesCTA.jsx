import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

const ServicesCTA = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="rounded-3xl bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#1d3f91] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-16">
          
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to build something
            <br className="hidden sm:block" /> for your business?
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-slate-300 sm:text-base">
            Tell us about your project and let's figure out the right digital
            solution for your business.
          </p>

          <Link
            to="/start-project"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#315fcf] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#244aa8]"
          >
            Let's Talk
            <ArrowRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCTA;