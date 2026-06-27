import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { portfolio } from "../data/portfolioData.jsx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold text-white">
            Featured <span className="text-indigo-400">Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Some of my recent Full Stack Development projects.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-wrap justify-center gap-8">

          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.1,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="w-full sm:w-[340px] bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl overflow-hidden shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300"
            >

              {/* Banner */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover"
                />
              ) : (
                <div className="h-36 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
              )}

              {/* Content */}
              <div className="p-5">

                {/* Tech Stack */}
                <span className="inline-block bg-indigo-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                  {project.tech}
                </span>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-6 min-h-[70px]">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white py-2.5 rounded-lg text-sm font-medium transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;