import StartProjectHero from "../components/start-project/Hero";
import ProjectForm from "../components/start-project/ProjectForm";
import WhatHappensNext from "../components/start-project/WhatHappensNext";
import DirectContact from "../components/start-project/DirectContact";
import SEO from "../components/common/SEO";


const StartProject = () => {
  return (
    <>
      <SEO
        title="Let's Build Something Great | MANVYN"
        description="Have a website, e-commerce or web application idea? Tell MANVYN about your project and let's build it together."
        path="/start-project"
      />
      <StartProjectHero />
      <ProjectForm />
      <WhatHappensNext />
      <DirectContact />
    </>
  );
};

export default StartProject;
