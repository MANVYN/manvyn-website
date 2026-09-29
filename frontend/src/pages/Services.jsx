import ServicesHero from "../components/services/ServicesHero";
import ServicesAccordion from "../components/services/ServicesAccordion";
import ServicesCTA from "../components/services/ServicesCTA";
import SEO from "../components/common/SEO";


const Services = () => {
  return (
    <>
      <SEO
        title="Digital Solutions Built for Modern Businesses | MANVYN"
        description="Professional websites, e-commerce stores, web applications and custom software development for startups and growing businesses."
        path="/services"
      />
      <ServicesHero />
      <ServicesAccordion />
      <ServicesCTA />
    </>
  );
};

export default Services;
