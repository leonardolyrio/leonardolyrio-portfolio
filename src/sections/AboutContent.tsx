import { Code, GraduationCap } from "lucide-react";
import profilePhoto from "../assets/photo.webp";

function AboutContent() {
  return (
    <section className="flex flex-col items-center gap-16 md:gap-24 px-6 py-16 md:py-24 w-full max-w-5xl mx-auto">
      {/* Seção Principal: Bio */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4 flex flex-col items-center md:items-start gap-6">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-4xl overflow-hidden shadow-sm border-4 border-white">
            <img
              src={profilePhoto}
              alt="Foto de perfil de Leonardo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-zinc-900">Leonardo Lyrio</h3>
            <p className="text-zinc-500 text-sm">Desenvolvedor Frontend</p>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-zinc-900 leading-tight">
            Transformando ideias em experiências digitais memoráveis.
          </h2>
          <div className="space-y-4 text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-zinc-600">
            <p>
              Olá! Sou o Leonardo Lyrio, desenvolvedor frontend apaixonado por criar interfaces que unem estética e funcionalidade,
              especializando-me em React e Tailwind CSS para construir aplicações
              modernas, fluidas e com alta performance.
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Detalhes: Educação & Habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="p-8 bg-zinc-50 border border-zinc-200/70 rounded-4xl flex flex-col gap-6">
          <div className="flex items-center gap-3 text-zinc-900">
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold">Foco Atual</h3>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-zinc-800">JavaScript & React</span>
              <span className="text-sm text-zinc-500">Aperfeiçoando a base da linguagem e o ecossistema React</span>
              <span className="text-xs text-zinc-400 italic">Foco em componentização avançada e performance no Frontend</span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-zinc-50 border border-zinc-200/70 rounded-4xl flex flex-col gap-6">
          <div className="flex items-center gap-3 text-zinc-900">
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold">Habilidades</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "VS Code", "Terminal", "Git", "GitHub", "Linux"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
