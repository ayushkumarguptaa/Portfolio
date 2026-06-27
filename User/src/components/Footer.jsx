import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../Data/portfolioData";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10">

      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          {portfolio.name}
        </h2>

        <p className="text-gray-400 mt-3">
          Full Stack MERN Developer
        </p>

        <div className="flex justify-center gap-6 mt-6">

          <a
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={30}
              className="hover:text-cyan-400"
            />
          </a>

          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={30}
              className="hover:text-cyan-400"
            />
          </a>

        </div>

        <p className="mt-8 text-gray-500">
          © {new Date().getFullYear()} Ayush Kumar Gupta. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;