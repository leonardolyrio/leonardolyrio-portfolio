import ProjectsGrid from "../sections/ProjectsGrid";
import Contact from "../components/Contact";
import PageHero from "../sections/PageHero";
import { Reveal } from "../components/Reveal";

function Projects() {
  return (
    <main className="min-h-screen bg-white sm:m-2 sm:rounded-t-4xl overflow-hidden">
      <Reveal>
        <PageHero title="Projetos" />
      </Reveal>
      <Reveal delay={0.2}>
        <ProjectsGrid />
      </Reveal>
      <Reveal delay={0.4}>
        <Contact />
      </Reveal>
    </main>
  );
}

export default Projects;
