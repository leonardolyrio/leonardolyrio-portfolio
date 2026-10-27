import { useState } from "react";
import { Link } from "react-router-dom";
import GradientASCII from "./GradientASCII";
import { Mail, Copy, Check, ArrowRight } from "lucide-react";
import { LinkedIn } from "./icons/LinkedIn";
import { GitHub } from "./icons/GitHub";

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = "leonardolyrio123@gmail.com";

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback para navegadores antigos ou contextos não seguros (HTTP)
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;

        // Garante que o textarea não cause scroll ou seja visível
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setIsCopied(true);
    } catch (err) {
      console.error("Erro ao copiar texto: ", err);
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24 w-full">
      <div className="w-full max-w-5xl relative isolate overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 px-6 py-12 md:p-10 border border-zinc-200/80 rounded-[2.5rem] shadow-sm">
        {/* Background Animation */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <GradientASCII
            lightMode
            colors={["#3b82f6", "#93c5fd", "#bfdbfe", "#e0f2fe"]}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={16}
            density={0.8}
            gradientOpacity={1}
            glyphOpacity={0.7}
          />
        </div>

        {/* Textos e Botões (Alinhados à esquerda) */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 text-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold tracking-tight text-zinc-900 leading-tight">
              Vamos nos conectar
            </h2>
            <p className="max-w-105 text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-zinc-700">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou
              oportunidades de fazer parte da sua visão. Entre em contato!
            </p>
          </div>

          <div className="relative flex items-center justify-start text-[14.5px] font-medium text-white mt-2 mb-12">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleCopy}
              className="flex items-center gap-1 px-5 py-3 bg-zinc-950 rounded-xl shadow-sm cursor-pointer transition-all duration-300 hover:bg-zinc-800 shrink-0 z-10"
            >
              {/* Ícones empilhados com blur e transição suave */}
              <div className="relative w-5 h-5 flex items-center justify-center">
                {/* Container para Mail e Copy - some quando isCopied é true */}
                <div
                  className={`relative w-full h-full transition-all duration-300 flex items-center justify-center ${isCopied ? "opacity-0 scale-50 blur-md" : "opacity-100 scale-100 blur-0"}`}
                >
                  {/* Ícone Mail - some no hover */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-0 scale-50 blur-md" : "opacity-100 scale-100 blur-0"}`}
                  >
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  {/* Ícone Copy - aparece no hover */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-50 blur-md"}`}
                  >
                    <Copy className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Ícone de Check - aparece ao copiar */}
                <div
                  className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${isCopied ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-50 blur-md"}`}
                >
                  <Check className="w-4.5 h-4.5" />
                </div>
              </div>

              {/* Textos com blur e larguras controladas para o botão expandir */}
              <div className="relative flex items-center overflow-hidden">
                {/* Texto 'Contato' - Define a largura inicial e some com blur */}
                <span
                  className={`transition-all duration-500 whitespace-nowrap ${isHovered ? "max-w-0 opacity-0 blur-md -translate-y-1 overflow-hidden" : "max-w-25 opacity-100 blur-0 translate-y-0"}`}
                >
                  Contato
                </span>

                {/* Texto Email - Expande a largura e aparece com blur */}
                <span
                  className={`transition-all duration-500 whitespace-nowrap ${isHovered ? "max-w-75 opacity-100 blur-0 translate-y-0" : "max-w-0 opacity-0 blur-md translate-y-1 overflow-hidden"}`}
                >
                  leonardolyrio.contato@gmail.com
                </span>
              </div>
            </button>
            <Link
              to="/projects"
              className={`group absolute top-0 left-0 flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-xl shadow-sm text-zinc-800 hover:bg-white transition-all duration-500 shrink-0 whitespace-nowrap ${
                isHovered
                  ? "translate-x-0 translate-y-[60px] opacity-100"
                  : "translate-x-[145px] translate-y-0 opacity-100"
              }`}
            >
              Veja os projetos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Card Branco de Redes Sociais */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <div className="w-80 max-w-sm h-70 flex flex-col items-center justify-center gap-8 bg-white p-10 rounded-4xl border border-zinc-200 shadow-sm">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="#"
                  className="group w-12 h-12 flex items-center justify-center border border-zinc-200 rounded-xl hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
                >
                  <Mail className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/leonardolyrio"
                  target="_blank"
                  className="group w-12 h-12 flex items-center justify-center border border-zinc-200 rounded-xl hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
                >
                  <LinkedIn className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leonardolyrio"
                  target="_blank"
                  className="group w-12 h-12 flex items-center justify-center border border-zinc-200 rounded-xl hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
                >
                  <GitHub className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900" />
                </a>
              </li>
            </ul>

            <div className="flex flex-col items-center gap-1.5 text-center">
              <p className="text-[13.5px] font-medium text-zinc-700">
                2026 &copy; Built with React
              </p>
              <span className="text-[12px] text-zinc-500">
                By React Bits Pro
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
