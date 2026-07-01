import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { portfolio } from "../Data/portfolioData";
import ContactMe from "../../src/assets/Contact.gif"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-slate-950 overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12 sm:mb-14">
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="text-4xl sm:text-5xl font-bold text-white"
  >
    Contact <span className="text-indigo-400">Me</span>
  </motion.h2>

  <img
    src={ContactMe}
    alt="Contact"
    className="w-16 h-16 object-contain"
  />
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all duration-300"
          >

            {/* Phone */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <FaPhone className="text-white" size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-slate-400 text-sm">Phone</p>
                <a href={`tel:${portfolio.phonel}`} className="text-white font-medium break-all hover:text-indigo-400 transition">
                  {portfolio.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <FaEnvelope className="text-white" size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-slate-400 text-sm">Email</p>

                <a
                  href={`mailto:${portfolio.email}`}
                  className="text-white font-medium break-all hover:text-indigo-400 transition"
                >
                  {portfolio.email}
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <FaGithub className="text-white" size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-slate-400 text-sm">GitHub</p>

                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white break-all hover:text-indigo-400 transition"
                >
                  Visit Profile
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <FaLinkedin className="text-white" size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-slate-400 text-sm">LinkedIn</p>

                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white break-all hover:text-indigo-400 transition"
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
            transition={{ duration: 0.6 }}
            className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all duration-300"
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
            />

            <button
              type="submit"
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