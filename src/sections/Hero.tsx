import { useState } from "react";
import profilePhoto from "../assets/photo.webp";
import GradientASCII from "../components/GradientASCII";
import { Mail, Copy, Check, ArrowRight } from "lucide-react";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("leonardolyrio123@gmail.com");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="relative isolate overflow-hidden min-h-dvh flex items-center justify-center gap-20 m-2 rounded-t-4xl">
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

      <div className="flex flex-col gap-5">
        <span className="text-lg font-medium text-zinc-800">
          Hey 👋, I'm Leonardo
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-6xl font-medium">
            Frontend developer <br /> & AI enthusiast
          </h1>
          <p className="max-w-full w-120 text-xl leading-relaxed text-zinc-800">
            Independent developer focused on interfaces that feel calm,
            considered, and quietly fast.
          </p>
        </div>

        <div className="flex items-center gap-5 text-[15px] text-white">
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
                Contact
              </span>

              {/* Texto Email - Expande a largura e aparece com blur */}
              <span
                className={`transition-all duration-500 whitespace-nowrap ${isHovered ? "max-w-75 opacity-100 blur-0 translate-y-0" : "max-w-0 opacity-0 blur-md translate-y-1 overflow-hidden"}`}
              >
                leonardolyrio.contato@gmail.com
              </span>
            </div>
          </button>
          <a
            href="#"
            className="group flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-xl shadow-sm text-zinc-800"
          >
            View My Work
            <ArrowRight className="scale-80 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>

      <img
        src={profilePhoto}
        alt=""
        className="w-full max-w-90 rounded-3xl border-5 border-white"
      />
    </section>
  );
}

export default Hero;
