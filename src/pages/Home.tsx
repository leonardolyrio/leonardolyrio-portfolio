import Hero from "../sections/Hero";
import ProjectsGrid from "../sections/ProjectsGrid";
import Contact from "../components/Contact";
import { Reveal } from "../components/Reveal";

function Home() {
  return (
    <main>
      <title>Leonardo Lyrio | Frontend Developer</title>
      <meta name="description" content="Portfólio de Leonardo Lyrio, desenvolvedor frontend e entusiasta de IA, com projetos de interfaces web." />
      <meta property="og:title" content="Leonardo Lyrio | Frontend Developer" />
      <meta property="og:description" content="Portfólio de Leonardo Lyrio, desenvolvedor frontend e entusiasta de IA, com projetos de interfaces web." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Leonardo Lyrio | Frontend Developer" />
      <meta name="twitter:description" content="Portfólio de Leonardo Lyrio, desenvolvedor frontend e entusiasta de IA, com projetos de interfaces web." />
      <meta name="twitter:image" content="/og-image.webp" />

      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={0.2}>
        <ProjectsGrid limit={3} showViewAllButton />
      </Reveal>
      <Reveal delay={0.4}>
        <Contact />
      </Reveal>
    </main>
  );
}

export default Home;