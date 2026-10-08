import { useMemo, useState } from "react";

import Container from "../components/common/Container";
import WorkHero from "../components/work/Hero";
import FeaturedProject from "../components/work/FeaturedProject";
import ProjectFilters from "../components/work/ProjectFilters";
import ProjectGrid from "../components/work/ProjectGrid";
import WorkCTA from "../components/work/WorkCTA";
import SEO from "../components/common/SEO";

import { projectCategories, projects } from "../data/projects";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredProject = projects.find((project) => project.featured);

  const filteredProjects = useMemo(() => {
    // const availableProjects = projects.filter((project) => !project.featured);
    const availableProjects = projects.filter((project) => project);

    if (activeCategory === "All") {
      return availableProjects;
    }

    return availableProjects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  console.log(filteredProjects);

  return (
    <>
      <SEO
        title="Digital Projects & Solutions We've Built | MANVYN"
        description="Explore websites, e-commerce experiences and web applications designed and developed by MANVYN."
        path="/work"
      />
      <WorkHero />

      {featuredProject && <FeaturedProject project={featuredProject} />}

      <section className="bg-white">
        <Container>
          <ProjectFilters
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </Container>
      </section>

      <ProjectGrid projects={filteredProjects} />

      <WorkCTA />
    </>
  );
};

export default Work;
