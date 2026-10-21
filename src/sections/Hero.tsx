import profilePhoto from "../assets/photo.webp";

function Hero() {
  return (
    <section className="min-h-dvh flex items-center justify-center gap-20">
      <div className="flex flex-col gap-5">
        <span className="text-lg font-semibold text-zinc-800">
          Hey 👋, I'm Leonardo
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-6xl font-medium">
            Frontend developer <br /> & AI enthusiast
          </h1>
          <p className="max-w-full w-120 text-xl leading-relaxed text-zinc-600">
            Independent developer focused on interfaces that feel calm,
            considered, and quietly fast.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="px-4 py-2 bg-black text-white font-medium rounded-lg"
          >
            Contact
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-white font-medium border border-zinc-200 rounded-lg"
          >
            View My Work
          </a>
        </div>
      </div>

      <img src={profilePhoto} alt="" className="w-90 rounded-2xl" />
    </section>
  );
}

export default Hero;
