import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "🏢 Salesforce Capstone",
    description:
      "End-to-end Salesforce solution with automation, flows, and custom objects built for real-world business scenarios.",
    tech: ["Salesforce", "Apex", "Flow Builder", "Lightning App Builder"],
    link: "https://github.com/Husam26/salesforce-capstone-replastix", // Replace with actual repo link
    bgColor: "from-[#e0f7fa] to-[#80deea]",
  },

  {
    title: "🧠 SENSAI",
    description:
      "AI-powered toolkit for IT professionals with resume builder, job analyzer, and cover letter generation.",
    tech: ["React", "Node.js", "OpenAI", "Tailwind CSS"],
    link: "https://github.com/Husam26/SensAI",
    liveLink: "https://sens-ai-flax.vercel.app", // Add your live URL here
    bgColor: "from-[#fffaf0] to-[#f8bbd0]",
  },
  {
    title: "🎙️ AI Assistant (Nova)",
    description:
      "Voice-enabled MERN stack assistant with user-specific chat history, modes, and JWT auth.",
    tech: ["React", "Node.js", "MongoDB", "Speech-to-Text"],
    link: "https://github.com/Husam26/Ai-assistant",
    liveLink: "https://ai-assistant-1-sqte.onrender.com", // Add your live URL here
    bgColor: "from-[#fce4ec] to-[#fdfdfd]",
  },
  {
    title: "💰 Welth",
    description:
      "AI-integrated finance platform for tracking daily expenses, analytics, and budgeting.",
    tech: ["Next.js", "MongoDB", "Tailwind", "AI"],
    link: "https://github.com/Husam26/welth",
    bgColor: "from-[#fef9e7] to-[#e3f2fd]",
  },
  {
    title: "📝 TextUtils",
    description:
      "React utility app to transform and analyze text easily (word count, spaces, etc).",
    tech: ["React", "Bootstrap", "JavaScript"],
    link: "https://github.com/Husam26/textutiles",
    bgColor: "from-[#e0f7fa] to-[#fdfdfd]",
  },
  {
    title: "🏋️ PureFit",
    description:
      "MERN e-commerce fitness app with authentication, cart, admin panel, and payments.",
    tech: ["MERN", "JWT", "Tailwind", "MongoDB"],
    link: "https://github.com/Husam26/PureFit-",
    liveLink: "https://pure-fit-frontend.vercel.app", // Add your live URL here
    bgColor: "from-[#ede7f6] to-[#f3e5f5]",
  },
  {
    title: "📺 Streamify",
    description:
      "Full-stack video platform with live video call + chat features using Stream Chat SDK.",
    tech: ["React", "Node.js", "CSS", "Stream SDK"],
    link: "https://github.com/Husam26/streamify",
    liveLink: "https://streamify-no49.onrender.com", // Add your live URL here
    bgColor: "from-[#fdf6ec] to-[#fdfdfd]",
  },
  {
    title: "🗞️ NewsNow",
    description:
      "News app that fetches real-time headlines by category using the News API.",
    tech: ["React", "Bootstrap", "News API"],
    link: "https://github.com/Husam26/NewsNow",
    liveLink: "https://your-live-salesforce-app-url.com", // Add your live URL here
    bgColor: "from-[#ffffff] to-[#fff1e6]",
  },
  {
    title: "🗂️ iNotes",
    description:
      "Secure cloud-based MERN app to write, edit, and manage your personal notes.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Husam26/MernStack-Noteapp",
    liveLink: "https://your-live-salesforce-app-url.com", // Add your live URL here
    bgColor: "from-[#fff3e0] to-[#fdfdfd]",
  },
];

const ProjectCard = ({ project, index, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, range, [targetScale, 1]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={`relative w-[92vw] max-w-4xl p-8 rounded-3xl shadow-xl border backdrop-blur-xl bg-gradient-to-br ${project.bgColor} transition-all duration-500`}
      >
        <div className="backdrop-blur-lg bg-white/50 rounded-xl p-5 shadow-inner">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-white/60 text-gray-800 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-900 shadow-md transition-all hover:scale-105 inline-block"
          >
            🔗 GitHub Repo
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 shadow-md transition-all hover:scale-105 inline-block"
            >
              🚀 Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

function Projects() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
    [
      "#E0E7FF",
      "#D1FAE5",
      "#FEF3C7",
      "#FCE7F3",
      "#FEE2E2",
      "#E0E7FF",
      "#DDD6FE",
      "#D1D5DB",
    ]
  );

  return (
    <section id="projects" ref={scrollRef}>
      <motion.div style={{ backgroundColor }} className="relative">
        <div className="max-w-7xl mx-auto py-20 px-6 text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            My Creations
          </h2>
          <p className="text-lg text-gray-600">
            Scroll to explore my featured work.
          </p>
        </div>

        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={i}
              index={i}
              project={project}
              range={[i * 0.125, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </motion.div>
    </section>
  );
}

export default Projects;
