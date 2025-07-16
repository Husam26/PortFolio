import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const skillTree = {
  core: ["HTML", "CSS", "JavaScript"],
  frontend: ["React", "Tailwind CSS", "Vite"],
  backend: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
  salesforce: ["Apex", "LWC", "Salesforce Platform"],
  devops: ["Git & GitHub", "AWS (EC2, EBS)", "Postman"],
};

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const arrowVariants = {
  initial: { opacity: 0.3, y: 0 },
  animate: {
    opacity: [0.3, 1, 0.3],
    y: [0, 8, 0],
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-[#fef9f5] to-[#f2f5fc] text-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
          >
            The Anatomy of My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-500 mt-2"
          >
            From foundational knowledge to specialized expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
          {Object.entries(skillTree).map(([category, skills], i) => (
            <motion.div
              key={category}
              className="flex flex-col items-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={columnVariants}
            >
              {/* Animated Floating Category Titles */}
              <motion.h3
                className="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-4"
                animate={{
                  y: [0, -3, 0, 3, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {category}
              </motion.h3>

              <div className="flex flex-col items-center gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.3)",
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: index * 0.1,
                      }}
                      className="bg-white/70 backdrop-blur-lg text-gray-900 border border-gray-200 w-44 py-2 px-3 rounded-lg shadow-md transition-all"
                    >
                      {skill}
                    </motion.div>

                    {/* Glowing Arrow Down */}
                    {index < skills.length - 1 && (
                      <motion.div
                        variants={arrowVariants}
                        initial="initial"
                        animate="animate"
                        className="mt-1"
                      >
                        <ArrowDownIcon className="w-4 h-4 text-blue-400" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
