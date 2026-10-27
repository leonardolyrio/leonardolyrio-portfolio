import AboutContent from "../sections/AboutContent";
import Contact from "../components/Contact";
import PageHero from "../sections/PageHero";
import { Reveal } from "../components/Reveal";

function About() {
  return (
    <main className="min-h-screen bg-white sm:m-2 sm:rounded-t-4xl overflow-hidden">
      <title>Sobre Mim | Leonardo Lyrio</title>
      <meta name="description" content="Saiba mais sobre a trajetória, habilidades e paixões de Leonardo Lyrio no desenvolvimento web." />
      <meta property="og:title" content="Sobre Mim | Leonardo Lyrio" />
      <meta property="og:description" content="Conheça a história e a experiência profissional de Leonardo Lyrio." />
      <meta property="og:type" content="website" />

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
