import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../Data/portfolioData";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#111827] to-[#020617] border-t border-slate-800 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-12 text-center">
        {/* Name */}
        <h2 className="text-4xl font-bold text-white">
          <span className="text-cyan-400">{portfolio.name}</span>
        </h2>

        {/* Role */}
        <p className="text-slate-400 mt-3 text-lg">
          Full Stack MERN Developer
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-8">
  <a
    href={portfolio.github}
    target="_blank"
    rel="noreferrer"
    className="text-white transition-all duration-300 hover:text-sky-400 hover:scale-110"
  >
    <FaGithub size={42} />
  </a>

  <a
    href={portfolio.linkedin}
    target="_blank"
    rel="noreferrer"
    className="text-white transition-all duration-300 hover:text-sky-400 hover:scale-110"
  >
    <FaLinkedin size={42} />
  </a>
</div>

        {/* Divider */}
        <div className="w-32 h-px bg-slate-700 mx-auto my-8"></div>

        {/* Copyright */}
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {portfolio.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;