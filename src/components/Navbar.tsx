import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-5 left-[50%] translate-x-[-50%] z-10 flex justify-center gap-1.5 p-1 bg-white/90 rounded-full shadow-sm text-[15px]">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `relative px-3 py-1 rounded-full transition-colors duration-300 z-10 ${
              isActive ? "text-black" : "text-zinc-500 hover:text-zinc-800"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span className="relative z-20">{link.name}</span>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-black/5 border border-zinc-200 rounded-full z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
