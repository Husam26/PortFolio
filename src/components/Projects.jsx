import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "🚀 NEXORA – AI-Driven CRM & Revenue Pipeline",
    description:
      "Architected a scalable CRM system with role-based access control and modular backend design. Implemented Controller-Service-Model architecture following low-level design principles. Developed independent micro-modules: Smart Invoicing, Task Manager, Smart Email using Node.js, connected via unified API Gateway. Optimized Mongo queries to handle complex deal ownership and assignment logic.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    link: "https://github.com/Husam26",
    bgColor: "from-[#e0e7ff] to-[#c7d2fe]",
  },
  {
    title: "🏥 Agentforce Healthcare Navigation & Triage",
    description:
      "Architected an AI-driven patient scheduling and triage system leveraging Salesforce Agentforce, Health Cloud, and Data Cloud to automate clinical workflows. Engineered an Advanced Symptom Router using Apex to intelligently map complex patient inputs to clinical departments. Integrated a 360° Patient Intelligence Hub via Data Cloud with a Predictive No-Show Model using Apex invocable actions.",
    tech: ["Salesforce", "Apex", "Health Cloud", "Data Cloud", "Agentforce", "LWC"],
    link: "https://github.com/Husam26",
    bgColor: "from-[#dbeafe] to-[#bfdbfe]",
  },
  {
    title: "🩺 IoT Health – Smart Health Monitoring System",
    description:
      "Built a real-time health monitoring system using Socket.io for live sensor data ingestion. Integrated machine learning models to predict health risks based on vital parameters. Developed interactive dashboards for historical data visualization and trend analysis.",
    tech: ["React", "Node.js", "Socket.io", "ML", "Express", "MongoDB"],
    link: "https://github.com/Husam26",
    bgColor: "from-[#d1fae5] to-[#a7f3d0]",
  },
  {
    title: "💰 WELTH – AI-Based Personal Finance Platform",
    description:
      "Developed a full-stack finance tracking application with PostgreSQL and AI-powered insights. Implemented multilingual AI recommendations and secure authentication workflows for personalized budgeting and expense analytics.",
    tech: ["Next.js", "PostgreSQL", "Supabase", "AI", "Tailwind CSS"],
    link: "https://github.com/Husam26/welth",
    bgColor: "from-[#fef9e7] to-[#fde68a]",
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
    [0, 0.25, 0.5, 0.75, 1],
    [
      "#E0E7FF",
      "#D1FAE5",
      "#FEF3C7",
      "#FCE7F3",
      "#E0E7FF",
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
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </motion.div>
    </section>
  );
}

export default Projects;

