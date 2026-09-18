import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { StackGrid } from "@/components/sections/StackGrid";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { experience, education } from "@/content/profile";
import { featuredProject, otherProjects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StackGrid />
      <FeaturedProject project={featuredProject} />
      <ProjectsGrid projects={otherProjects} />
      <Timeline id="experiencia" kicker="Experiencia" title="Trayectoria" items={experience} />
      <Timeline id="formacion" kicker="Formación" title="Formación académica" items={education} />
      <Contact />
    </>
  );
}
