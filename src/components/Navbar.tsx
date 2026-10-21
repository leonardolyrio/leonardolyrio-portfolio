function Navbar() {
  return (
    <nav className="fixed top-5 left-[50%] translate-x-[-50%] z-10 flex justify-center gap-1.5 p-1.5 bg-black/5 rounded-full text-zinc-600">
      <a
        href="#"
        className="text-zinc-800 bg-white px-3 py-1.5 border border-zinc-200 rounded-full"
      >
        Home
      </a>
      <a href="#" className="px-3 py-1.5">
        Projects
      </a>
      <a href="#" className="px-3 py-1.5">
        About
      </a>
    </nav>
  );
}

export default Navbar;
