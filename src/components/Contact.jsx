import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf, FaFileAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-[#e0f7fa] to-[#f1f8ff] text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Invitation & Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-indigo-600"
          >
            Let's Connect
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg">
            Have a project in mind, a question, or just want to say hello? I'd
            love to hear from you.
          </motion.p>
          <motion.div variants={itemVariants} className="flex space-x-6">
            <a
              href="https://github.com/husam26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://linkedin.com/in/mohd-husamuddin-7b7a77339/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition font-semibold shadow-sm"
            >
              <FaFileAlt className="mr-2" />
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={formVariants}
        >
          <form className="bg-white p-8 rounded-xl shadow-md space-y-6 border border-indigo-100">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full mt-1 bg-white border border-gray-300 px-4 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full mt-1 bg-white border border-gray-300 px-4 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                className="w-full mt-1 bg-white border border-gray-300 px-4 py-2 rounded-md h-32 resize-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
