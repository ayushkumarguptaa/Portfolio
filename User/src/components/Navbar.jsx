import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../data/portfolioData";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 z-50">
  <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

    <h1 className="text-2xl font-bold text-cyan-400">
      Ayush.dev
    </h1>

    <ul className="hidden md:flex gap-8 text-lg text-slate-300">

      <li>
        <a href="#home" className="transition duration-300 hover:text-sky-400">
          Home
        </a>
      </li>

      <li>
        <a href="#about" className="transition duration-300 hover:text-sky-400">
          About
        </a>
      </li>

      <li>
        <a href="#skills" className="transition duration-300 hover:text-sky-400">
          Skills
        </a>
      </li>

      <li>
        <a href="#projects" className="transition duration-300 hover:text-sky-400">
          Projects
        </a>
      </li>

      <li>
        <a href="#experience" className="hover:text-indigo-400">
             Experience
        </a>
      </li>

      <li>
        <a href="#training" className="hover:text-indigo-400">
            Training
        </a>
      </li>

      <li>
        <a href="#certifications" className="transition duration-300 hover:text-sky-400">
          Certifications
        </a>
      </li>

      <li>
        <a href="#contact" className="transition duration-300 hover:text-sky-400">
          Contact
        </a>
      </li>

    </ul>

    <div className="flex gap-5 text-slate-300">

      <a
        href={portfolio.github}
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:text-sky-400 hover:scale-110"
      >
        <FaGithub size={28} />
      </a>

      <a
        href={portfolio.linkedin}
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:text-sky-400 hover:scale-110"
      >
        <FaLinkedin size={28} />
      </a>

    </div>

  </div>
</nav>
  );
};

export default Navbar;