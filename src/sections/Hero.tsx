import profilePhoto from "../assets/photo.webp";
import GradientASCII from "../components/GradientASCII";

function Hero() {
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

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="px-4 py-3 bg-black rounded-xl text-white"
          >
            Contact
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-white border border-zinc-200 rounded-xl text-zinc-800"
          >
            View My Work
          </a>
        </div>
      </div>

      <img src={profilePhoto} alt="" className="w-full max-w-90 rounded-2xl" />
    </section>
  );
}

export default Hero;
