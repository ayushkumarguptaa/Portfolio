import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#111827] to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center text-white mb-5"
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-400 max-w-3xl mx-auto mb-10 text-base sm:text-lg"
        >
          Passionate Full Stack MERN Developer dedicated to building
          responsive, scalable, and user-friendly web applications.
        </motion.p>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            bg-slate-800/70
            backdrop-blur-md
            border
            border-slate-700
            rounded-2xl
            p-6
            sm:p-10
            shadow-2xl

            h-[420px]
            md:h-auto

            overflow-y-auto
            md:overflow-visible

            hide-scrollbar
          "
        >
          <p className="text-slate-300 text-base sm:text-lg leading-8 sm:leading-9">

            I'm a passionate{" "}
            <span className="text-indigo-400 font-semibold">
              Full Stack MERN Developer
            </span>{" "}
            with experience in designing and developing scalable web
            applications. I enjoy solving real-world problems through
            technology and continuously improving my programming skills.

            <br /><br />

            My expertise includes
            <span className="text-cyan-400"> React.js</span>,
            <span className="text-cyan-400"> Node.js</span>,
            <span className="text-cyan-400"> Express.js</span>,
            <span className="text-cyan-400"> MongoDB</span>,
            <span className="text-cyan-400"> PostgreSQL</span>,
            and modern frontend technologies.

            <br /><br />

            I have solved{" "}
            <span className="text-indigo-400 font-semibold">
              200+ LeetCode Problems
            </span>
            , strengthening my understanding of Data Structures &
            Algorithms.

            I also enjoy learning new technologies like
            <span className="text-cyan-400"> Azure</span> and
            <span className="text-cyan-400"> CI/CD</span>.

          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center shadow-lg"
          >
            <FaLaptopCode className="text-indigo-400 text-4xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">
              Frontend
            </h3>
            <p className="text-slate-400">
              React.js, Tailwind CSS, JavaScript, Responsive UI
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center shadow-lg"
          >
            <FaCode className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">
              Backend
            </h3>
            <p className="text-slate-400">
              Node.js, Express.js, REST APIs, Authentication
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center shadow-lg"
          >
            <FaDatabase className="text-emerald-400 text-4xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">
              Database
            </h3>
            <p className="text-slate-400">
              MongoDB, PostgreSQL, MySQL
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center shadow-lg"
          >
            <FaRocket className="text-pink-400 text-4xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">
              Learning
            </h3>
            <p className="text-slate-400">
              DSA, Azure, CI/CD, System Design
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;