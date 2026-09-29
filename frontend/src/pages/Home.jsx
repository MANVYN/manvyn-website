import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import DigitalPresence from "../components/home/DigitalPresence";
import FeaturedWork from "../components/home/FeaturedWork";
import Process from "../components/home/Process";
import Audience from "../components/home/Audience";
import FinalCTA from "../components/home/FinalCTA";
import SEO from "../components/common/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Web & Software Solutions for Startups & Businesses | MANVYN"
        description="MANVYN builds modern websites, e-commerce stores and custom web applications for startups and growing businesses."
        path="/"
      />
      <Hero />
      <Services />
      <DigitalPresence />
      <FeaturedWork />
      <Process />
      <Audience />
      <FinalCTA />
    </>
  );
};

export default Home;
