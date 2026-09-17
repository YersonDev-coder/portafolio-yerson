import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { StackGrid } from "@/components/sections/StackGrid";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { OtherRepos } from "@/components/sections/OtherRepos";
import { Contact } from "@/components/sections/Contact";
import { featuredProject, otherProjects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StackGrid />
      <FeaturedProject project={featuredProject} />
      <ProjectsGrid projects={otherProjects} />
      <OtherRepos />
      <Contact />
    </>
  );
}
