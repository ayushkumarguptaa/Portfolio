import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const trainings = [
  {
    title: "MERN Stack Development Training",
    organization: "Grass Solution Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    duration: "2025",
    description:
      "Completed intensive industry-oriented training covering MongoDB, Express.js, React.js, Node.js, REST APIs, Authentication (JWT), CRUD operations, Git/GitHub, deployment, and responsive web application development.",
  },
  {
    title: "Full Stack Web Development",
    organization: "Apna College",
    location: "Online",
    duration: "2025",
    description:
      "Completed comprehensive Full Stack Development training focused on HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, REST APIs, authentication, backend development, deployment, and real-world full stack projects.",
  },
];

const Training = () => {
  return (
    <section
      id="training"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Training &{" "}
            <span className="text-indigo-400">Workshops</span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Professional training programs that strengthened my Full Stack
            development skills.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">

          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -5 }}
              className="
                bg-slate-800/70
                backdrop-blur-md
                border
                border-slate-700
                rounded-2xl
                shadow-xl
                hover:border-indigo-500
                hover:shadow-indigo-500/30
                transition-all
                duration-300
                p-5
                sm:p-8
                h-[420px]
                md:h-auto
                flex
                flex-col
              "
            >
              {/* Header */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-white text-xl" />
                </div>

                <div className="flex-1 min-w-0">

                  <div className="flex flex-col lg:flex-row lg:justify-between gap-3">

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white break-words">
                        {training.title}
                      </h3>

                      <p className="text-indigo-400 font-semibold mt-2">
                        {training.organization}
                      </p>

                      <p className="text-slate-400 text-sm mt-1">
                        {training.location}
                      </p>
                    </div>

                    <span className="inline-block w-fit bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">
                      {training.duration}
                    </span>

                  </div>

                </div>

              </div>

              {/* Scrollable Description */}
              <div className="mt-6 flex-1 overflow-y-auto hide-scrollbar pr-2">
                <p className="text-slate-300 leading-8">
                  {training.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Training;