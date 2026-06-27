import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { portfolio } from "../Data/portfolioData";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-white"
        >
          My <span className="text-indigo-400">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {portfolio.certifications.map((certificate, index) => (
            <motion.div
              key={certificate}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl p-8 flex items-center gap-5 shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-4 rounded-full shadow-lg">
                <FaCertificate
                  size={28}
                  className="text-white"
                />
              </div>

              {/* Content */}
              <div>

                <h3 className="text-xl font-bold text-white">
                  {certificate}
                </h3>

                <p className="text-slate-400 mt-2 leading-7">
                  Successfully completed certification and gained
                  practical knowledge in the respective technology.
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;