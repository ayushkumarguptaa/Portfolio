import { portfolio } from "../Data/portfolioData";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaMicrosoft,
  FaCode,
  FaProjectDiagram, FaCogs 
} from "react-icons/fa";

const icons = {
  "HTML5/CSS3": (
    <div className="flex gap-1 text-lg">
      <FaHtml5 className="text-orange-500" />
      <FaCss3Alt className="text-blue-500" />
    </div>
  ),

  JavaScript: <FaJs className="text-yellow-400 text-xl" />,

  "React.js": <FaReact className="text-cyan-400 text-xl" />,

  "Node.js": <FaNodeJs className="text-green-500 text-xl" />,

  "Express.js": <FaCode className="text-gray-300 text-xl" />,

  MongoDB: <FaDatabase className="text-green-500 text-xl" />,

  PostgreSQL: <FaDatabase className="text-sky-500 text-xl" />,

  "Apache Spark": <FaCogs className="text-sky-500 text-xl" />,

  "ETL Pipelines": <FaProjectDiagram className="text-sky-500 text-xl" />,

  "Git/GitHub": (
    <div className="flex gap-1 text-lg">
      <FaGitAlt className="text-orange-500" />
      <FaGithub className="text-white" />
    </div>
  ),

  MySQL: <FaDatabase className="text-blue-500 text-xl" />,

  Azure: <FaMicrosoft className="text-blue-500 text-xl" />,

  "CI/CD": <FaGithub className="text-white text-xl" />,
};

const Skills = () => {
  const skills = [...portfolio.skills, ...portfolio.skills];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-[#0f172a] to-[#111827] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Technical <span className="text-indigo-400">Skills</span>
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Technologies and tools I use to build scalable and modern web
            applications.
          </p>
        </motion.div>

        {/* Skills Slider */}
        <div className="relative overflow-hidden py-4">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/70 to-transparent z-20 pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#111827] via-[#111827]/70 to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max items-center px-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                }}
                className="min-w-[120px] h-[120px] rounded-full bg-slate-800/70 backdrop-blur-xl border border-slate-700 flex flex-col items-center justify-center shadow-lg hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 cursor-pointer"
              >
                <div className="mb-2 flex items-center justify-center">
                  {icons[skill]}
                </div>

                <h3 className="text-white text-xs font-semibold text-center px-2 leading-tight">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;