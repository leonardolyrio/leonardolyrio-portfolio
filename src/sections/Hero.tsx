import { useState } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/photo.webp";
import GradientASCII from "../components/GradientASCII";
import { Mail, Copy, Check, ArrowRight } from "lucide-react";

function Hero() {
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
    <section className="relative isolate overflow-hidden min-h-dvh flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16 m-2 rounded-t-4xl px-6 md:px-10 lg:px-16 box-border pt-28 lg:pt-0">
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

      <div className="flex flex-col gap-5 text-left flex-1 max-w-3xl w-full">
        <span className="text-lg font-medium text-zinc-900">
          Olá 👋, Eu sou Leonardo
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-zinc-900">
            <span className="md:whitespace-nowrap">Frontend developer</span>{" "}
            <br className="hidden md:block" /> & Entusiasta de IA
          </h1>
          <p className="max-w-full text-[clamp(1.125rem,2vw,1.25rem)] leading-relaxed text-zinc-600">
            Desenvolvedor independente focado em interfaces que transmitem
            calma, são bem pensadas e discretamente rápidas.
          </p>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-start gap-4 mt-2 text-[14px] sm:text-[15px] text-white">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCopy}
            className="flex items-center gap-1 px-4 py-3 bg-black rounded-xl shadow-sm cursor-pointer transition-all duration-300 hover:bg-zinc-800"
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
                  <Mail className="scale-80" />
                </div>
                {/* Ícone Copy - aparece no hover */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-50 blur-md"}`}
                >
                  <Copy className="scale-80" />
                </div>
              </div>

              {/* Ícone de Check - aparece ao copiar */}
              <div
                className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${isCopied ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-50 blur-md"}`}
              >
                <Check className="scale-80" />
              </div>
            </div>

            {/* Textos com blur e larguras controladas para o botão expandir */}
            <div className="relative flex items-center overflow-hidden">
              {/* Texto 'Contact' - Define a largura inicial e some com blur */}
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
            className="group flex items-center gap-2 px-4 py-3 bg-white border border-zinc-200 rounded-xl shadow-sm text-zinc-800 font-medium"
          >
            Veja meu trabalho
            <ArrowRight className="scale-70 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      <img
        src={profilePhoto}
        alt=""
        className="w-full max-w-full sm:max-w-md md:max-w-[clamp(20rem,35vw,28rem)] rounded-3xl border-4 md:border-5 border-white shadow-sm h-auto object-cover shrink-0"
      />
    </section>
  );
}

export default Hero;
