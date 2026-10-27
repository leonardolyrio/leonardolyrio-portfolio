import { Link } from "react-router-dom";
import project1Photo from "../assets/barbearia-casa-do-corte-banner.webp";
import { ArrowRight, Scissors, ExternalLink } from "lucide-react";
import { GitHub } from "../components/icons/GitHub";

interface Project {
  id: string;
  name: string;
  icon: React.ReactNode;
  photo: string;
  title: string;
  description: string;
  date: string;
  githubUrl: string;
  liveUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Casa do Corte",
    icon: <Scissors className="w-4 h-4 text-zinc-700" />,
    photo: project1Photo,
    title: "Site moderno e funcional para barbearia",
    description: "Criei uma interface focada em conversão, com fluxo de agendamento simplificado e design responsivo.",
    date: "Desenvolvimento Web & Design, 2026",
    githubUrl: "https://github.com/leonardolyrio/barbearia-casa-do-corte",
    liveUrl: "https://barbearia-casa-do-corte.vercel.app/",
  },
];

function ProjectsGrid({ showViewAllButton = false, limit }: { showViewAllButton?: boolean, limit?: number }) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="flex flex-col items-center gap-12 md://gap-16 px-6 py-16 md:py-24 w-full">
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-zinc-900">
          Meus Projetos
        </h2>
        <p className="max-w-150 text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-zinc-600">
          Uma seleção de projetos, desde experimentos simples até sistemas mais estruturados.
        </p>
      </div>

      {/* Grid de Projetos - Limitado a max-w-5xl para alinhamento perfeito no desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
        {displayedProjects.map((project) => (
          <div key={project.id} className="group relative w-full flex flex-col p-4 md:p-5 bg-white border border-zinc-200/70 rounded-4xl hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md">
            {/* Links de Ação (Aparecem no Hover) */}
            <div className="absolute bottom-5 right-6 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-zinc-500 hover:text-zinc-900 transition-colors"
                title="Ver repositório no GitHub"
              >
                <GitHub className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-zinc-500 hover:text-zinc-900 transition-colors"
                title="Visitar site"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Header do Card (Ícone + Nome) */}
            <div className="flex items-center gap-3 mb-4 text-[14px] font-medium text-zinc-900">
              <div className="w-8 h-8 border border-zinc-200/80 rounded-[10px] flex items-center justify-center bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                {project.icon}
              </div>
              {project.name}
            </div>

            {/* Banner */}
            <div className="w-full h-64 md:h-70 overflow-hidden rounded-[1.25rem] mb-4">
              <img
                src={project.photo}
                alt={`Banner do projeto ${project.name}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Textos do Card */}
            <div className="flex flex-col">
              <h3 className="text-xl md:text-[22px] mb-2 text-zinc-900 leading-snug tracking-//tight">
                {project.title}
              </h3>

              <p className="text-[15px] text-zinc-500 mb-6 leading-relaxed">
                {project.description}
              </p>

              <span className="text-[13px] text-zinc-400">
                {project.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de Ver Todos */}
      {showViewAllButton && (
        <Link to="/projects">
          <button className="group flex items-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 transition-colors cursor-pointer mt-4">
            Ver todos os projetos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </Link>
      )}
    </section>
  );
}

export default ProjectsGrid;
