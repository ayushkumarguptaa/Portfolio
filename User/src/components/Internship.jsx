import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#111827] via-[#0f172a] to-[#111827]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Work <span className="text-indigo-400">Experience</span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            My professional journey as a Full Stack Developer.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="
            bg-slate-800/70
            backdrop-blur-lg
            border
            border-slate-700
            rounded-2xl
            shadow-xl
            hover:border-indigo-500
            hover:shadow-indigo-500/30
            p-6
            md:p-8

            h-[550px]
            md:h-auto
          "
        >
          <div className="h-full flex flex-col">

            {/* Top */}
            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <FaBriefcase className="text-white text-xl" />
              </div>

              <div className="min-w-0">

                <h3 className="text-2xl font-bold text-white leading-snug">
                  Full Stack / MERN Stack Developer Intern
                </h3>

                <p className="text-indigo-400 font-semibold mt-2">
                  DMV CoreTech
                </p>

                <span className="inline-block mt-3 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">
                  Nov 2025 – Feb 2026
                </span>

              </div>

            </div>

            {/* Scroll Area */}
            <div className="mt-6 flex-1 overflow-y-auto pr-2 hide-scrollbar">

              <ul className="space-y-4 text-slate-300 leading-8 list-disc pl-5">

                <li>
                  Developed a complete Learning Management System (LMS) using
                  the MERN Stack.
                </li>

                <li>
                  Built responsive user and admin dashboards with React.js and
                  Tailwind CSS.
                </li>

                <li>
                  Developed secure REST APIs using Node.js and Express.js with
                  JWT authentication.
                </li>

                <li>
                  Integrated PostgreSQL database for managing users,
                  courses, enrollments, lectures and quizzes.
                </li>

                <li>
                  Implemented Razorpay payment gateway for secure online
                  course enrollment.
                </li>

                <li>
                  Integrated Cloudinary for image and video uploads.
                </li>

                <li>
                  Integrated Nodemailer for automated email notifications.
                </li>

                <li>
                  Designed RESTful APIs for course management.
                </li>

                <li>
                  Implemented secure authentication using JWT and bcrypt.
                </li>

                <li>
                  Built reusable React components and responsive layouts.
                </li>

                <li>
                  Optimized database queries for better application
                  performance.
                </li>

                <li>
                  Collaborated with the development team using Git and GitHub.
                </li>

                <li>
                  Delivered scalable, secure and user-friendly web
                  applications.
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