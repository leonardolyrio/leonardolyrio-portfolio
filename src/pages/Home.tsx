import Hero from "../sections/Hero";
import ProjectsGrid from "../sections/ProjectsGrid";
import Contact from "../components/Contact";
import { Reveal } from "../components/Reveal";

function Home() {
  return (
    <main>
      <title>Leonardo Lyrio | Desenvolvedor Frontend</title>
      <meta name="description" content="Portfólio de Leonardo Lyrio, desenvolvedor frontend especializado em criar experiências digitais modernas e fluidas." />
      <meta property="og:title" content="Leonardo Lyrio | Desenvolvedor Frontend" />
      <meta property="og:description" content="Explore meus projetos e habilidades em desenvolvimento frontend." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/og-image.webp" />

      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={0.2}>
        <ProjectsGrid showViewAllButton />
      </Reveal>
      <Reveal delay={0.4}>
        <Contact />
      </Reveal>
    </main>
  );
}

export default Home;