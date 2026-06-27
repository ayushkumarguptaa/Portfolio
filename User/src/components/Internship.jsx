import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-[#111827] via-[#0f172a] to-[#111827]"
    >
      <div className="max-w-6xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Work <span className="text-indigo-400">Experience</span>
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            My professional journey as a Full Stack Developer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300"
        >

          <div className="flex items-start gap-6">

            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <FaBriefcase className="text-white text-2xl" />
            </div>

            <div className="flex-1">

              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Full Stack / MERN Stack Developer Intern
                  </h3>

                  <p className="text-indigo-400 font-semibold mt-1">
                    DMV CoreTech
                  </p>
                </div>

                <span className="mt-3 md:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">
                  Nov 2025 – Present
                </span>

              </div>

              <ul className="mt-6 space-y-3 text-slate-300 leading-7 list-disc pl-5">

                <li>
                  Developed a complete Learning Management System (LMS) using the MERN Stack.
                </li>

                <li>
                  Built responsive user and admin dashboards with React.js and Tailwind CSS.
                </li>

                <li>
                  Developed secure REST APIs using Node.js and Express.js with JWT authentication.
                </li>

                <li>
                  Integrated PostgreSQL database for managing users, courses, enrollments, lectures, and quizzes.
                </li>

                <li>
                  Implemented Razorpay payment gateway for secure online course enrollment.
                </li>

                <li>
                  Integrated Cloudinary for image and video uploads and Nodemailer for automated email notifications.
                </li>

                <li>
                  Collaborated with the development team to deliver scalable, secure, and user-friendly web applications.
                </li>

              </ul>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;