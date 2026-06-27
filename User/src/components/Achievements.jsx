import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { portfolio } from "../data/portfolioData.jsx";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-[#111827] via-[#0f172a] to-[#111827]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            My <span className="text-indigo-400">Achievements</span>
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Milestones that reflect my learning journey and technical growth.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="flex flex-wrap justify-center gap-8">

          {portfolio.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="w-full sm:w-[380px] bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-5">

                {/* Trophy Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg">
                  <FaTrophy className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Achievement
                  </h3>

                  <p className="text-slate-300 leading-7">
                    {achievement}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;