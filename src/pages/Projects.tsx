import ProjectsGrid from "../sections/ProjectsGrid";
import Contact from "../components/Contact";
import PageHero from "../sections/PageHero";
import { Reveal } from "../components/Reveal";

function Projects() {
  return (
    <main className="min-h-screen bg-white sm:m-2 sm:rounded-t-4xl overflow-hidden">
      <title>Projetos | Leonardo Lyrio</title>
      <meta name="description" content="Confira os projetos desenvolvidos por Leonardo Lyrio, com foco em performance, design e usabilidade." />
      <meta property="og:title" content="Meus Projetos | Leonardo Lyrio" />
      <meta property="og:description" content="Veja a lista completa de projetos e as tecnologias utilizadas." />
      <meta property="og:type" content="website" />

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
