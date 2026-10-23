import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
