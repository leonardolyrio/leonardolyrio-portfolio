function Navbar() {
  return (
    <nav className="fixed top-5 left-[50%] translate-x-[-50%] z-10 flex justify-center gap-1.5 p-1.5 bg-white/90 rounded-full shadow-sm text-[15px] text-zinc-500">
      <a
        href="#"
        className="text-black bg-black/5 px-3 py-1 border border-zinc-200 rounded-full"
      >
        Home
      </a>
      <a href="#" className="px-3 py-1">
        Projects
      </a>
      <a href="#" className="px-3 py-1">
        About
      </a>
    </nav>
  );
}

export default Navbar;
