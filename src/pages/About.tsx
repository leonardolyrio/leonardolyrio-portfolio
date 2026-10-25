import AboutContent from "../sections/AboutContent";
import Contact from "../components/Contact";
import PageHero from "../sections/PageHero";
import { Reveal } from "../components/Reveal";

function About() {
  return (
    <main className="min-h-screen bg-white sm:m-2 sm:rounded-t-4xl overflow-hidden">
      <Reveal>
        <PageHero title="Sobre Mim" />
      </Reveal>
      <Reveal delay={0.2}>
        <AboutContent />
      </Reveal>
      <Reveal delay={0.4}>
        <Contact />
      </Reveal>
    </main>
  );
}

export default About;
