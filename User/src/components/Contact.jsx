import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { portfolio } from "../Data/portfolioData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center text-white mb-14"
        >
          Contact <span className="text-indigo-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl p-8 shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all duration-300"
          >

            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <FaPhone className="text-white" size={20} />
              </div>

              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <span className="text-white font-medium">
                  {portfolio.phone}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <FaEnvelope className="text-white" size={20} />
              </div>

              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <span className="text-white font-medium">
                  {portfolio.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <FaGithub className="text-white" size={20} />
              </div>

              <div>
                <p className="text-slate-400 text-sm">GitHub</p>

                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-indigo-400 transition"
                >
                  Visit Profile
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <FaLinkedin className="text-white" size={20} />
              </div>

              <div>
                <p className="text-slate-400 text-sm">LinkedIn</p>

                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-indigo-400 transition"
                >
                  Connect with Me
                </a>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl p-8 shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all duration-300"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl mb-5 bg-slate-700 border border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition text-white placeholder-slate-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl mb-5 bg-slate-700 border border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition text-white placeholder-slate-400"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full p-4 rounded-xl bg-slate-700 border border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition text-white placeholder-slate-400 resize-none"
            ></textarea>

            <button
              className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;