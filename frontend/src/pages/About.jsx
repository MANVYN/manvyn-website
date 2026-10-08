import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import WhatWeBelieve from "../components/about/WhatWeBelieve";
import HowWeWork from "../components/about/HowWeWork";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import TechnologyCapabilities from "../components/about/Capabilities";
import WhoWeWorkWith from "../components/about/WhoWeWorkWith";
import AboutCTA from "../components/about/AboutCTA";
import SEO from "../components/common/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="Building Digital Solutions That Matter | MANVYN"
        description="Learn about MANVYN, a web development studio helping businesses turn ideas into modern, scalable digital products."
        path="/about"
      />
      <AboutHero />
      <WhoWeAre />
      <WhatWeBelieve />
      <HowWeWork />
      <WhatMakesUsDifferent />
      <TechnologyCapabilities />
      <WhoWeWorkWith />
      <AboutCTA />
    </>
  );
};

export default About;
