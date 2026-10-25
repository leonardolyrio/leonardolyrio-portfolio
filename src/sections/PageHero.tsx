import GradientASCII from "../components/GradientASCII";

function PageHero({ title }: { title: string }) {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
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
      <div className="relative z-10 text-center px-4">
        {/* Título removido para seguir a referência de design */}
      </div>
    </section>
  );
}

export default PageHero;
