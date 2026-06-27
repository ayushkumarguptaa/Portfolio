import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import { portfolio } from "../Data/portfolioData";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-sky-400 text-lg sm:text-xl font-medium mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
            {portfolio.name}
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-indigo-300 mt-5 font-semibold">
            {portfolio.role}
          </h2>

          <p className="text-slate-300 mt-6 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto md:mx-0">
            {portfolio.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <a
              href="#contact"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold text-center shadow-lg hover:shadow-indigo-500/40 transition duration-300"
            >
              Hire Me
            </a>

            <a
              href="/Ayush_Kumar_Gupta_.pdf"
              download
              className="w-full sm:w-auto border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white px-7 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-300"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-10">

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white hover:scale-110 transition"
            >
              <FaGithub size={32} />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-sky-400 hover:scale-110 transition"
            >
              <FaLinkedin size={32} />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center w-full"
        >

          <div className="relative w-full max-w-[430px]">

            {/* Glow */}
            <div className="absolute inset-0 bg-indigo-600 blur-3xl opacity-20 rounded-3xl"></div>

            {/* Code Card */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">

              {/* Top Bar */}
              <div className="flex items-center gap-2 bg-slate-950 px-5 py-4 border-b border-slate-700">

                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <span className="ml-4 text-slate-400 text-sm">
                  developer.js
                </span>

              </div>

              {/* Code */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-3 overflow-x-auto">

                <p className="text-purple-400">
                  const <span className="text-cyan-400">developer</span> = {"{"}
                </p>

                <p className="ml-4 sm:ml-6 text-orange-400">
                  name:
                  <span className="text-green-400">
                    {" "} "{portfolio.name}",
                  </span>
                </p>

                <p className="ml-4 sm:ml-6 text-orange-400">
                  role:
                  <span className="text-green-400">
                    {" "} "{portfolio.role}",
                  </span>
                </p>

                <p className="ml-4 sm:ml-6 text-orange-400">
                  skills:
                  <span className="text-cyan-300">
                    {" "}["React", "Node.js", "Express", "MongoDB"],
                  </span>
                </p>

                <p className="ml-4 sm:ml-6 text-orange-400">
                  experience:
                  <span className="text-green-400">
                    {" "} "6 Months",
                  </span>
                </p>

                <p className="ml-4 sm:ml-6 text-orange-400">
                  dsa:
                  <span className="text-green-400">
                    {" "} "200+ LeetCode Problems",
                  </span>
                </p>

                <p className="ml-4 sm:ml-6 text-orange-400">
                  status:
                  <span className="text-emerald-400">
                    {" "} "Available for Work"
                  </span>
                </p>

                <p className="text-purple-400">{"};"}</p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;