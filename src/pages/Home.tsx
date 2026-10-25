import Hero from "../sections/Hero";
import ProjectsGrid from "../sections/ProjectsGrid";
import Contact from "../components/Contact";
import { Reveal } from "../components/Reveal";

function Home() {
  return (
    <main>
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