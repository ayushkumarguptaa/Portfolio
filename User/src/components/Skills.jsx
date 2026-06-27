import { portfolio } from "../Data/portfolioData";
import { motion } from "framer-motion";

const levels = {
  "HTML5/CSS3": 95,
  JavaScript: 92,
  "React.js": 90,
  "Node.js": 88,
  "Express.js": 88,
  MongoDB: 85,
  PostgreSQL: 80,
  "Git/GitHub":85,
  MySQL: 85,
  Azure: 70,
  "CI/CD": 70,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#0f172a] to-[#111827]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold text-white">
            Technical <span className="text-indigo-400">Skills</span>
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Technologies and tools I use to build scalable and modern web
            applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {portfolio.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-xl p-4 shadow-lg hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all duration-300"
            >

              {/* Skill Name */}
              <div className="flex justify-between items-center mb-3">

                <h3 className="text-white font-semibold text-sm">
                  {skill}
                </h3>

                <span className="text-xs font-semibold bg-indigo-600 text-white px-2.5 py-1 rounded-full shadow-md">
                  {levels[skill]}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${levels[skill]}%` }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 shadow-[0_0_10px_rgba(99,102,241,0.45)]"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;