import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experienceData = [
  {
    title: "Full-Stack Developer Intern",
    company: "Zenix Automotive Pvt Ltd",
    duration: "Feb 2025 – Apr 2025",
    description:
      "Developed and maintained a full-stack EV Charging Management Platform using the MERN stack, delivering features for both host dashboard and user-facing booking modules. Built and optimized 15+ RESTful API endpoints for station management, booking flows, and user operations with Express.js and MongoDB. Implemented multi-connector architecture (AC/DC support), dynamic pricing, and review systems to enhance platform scalability. Improved frontend performance by 30% through component optimization, lazy loading, and efficient state management with React.",
  },
  {
    title: "Salesforce Developer & Administrator Intern",
    company: "SmartBridge",
    duration: "Aug 2024 – Oct 2024",
    description:
      "Successfully completed a Salesforce capstone project involving end-to-end CRM solution development. Built and deployed custom Apex Classes, LWC Components, Validation Rules, and Screen Flows for real-world business automation scenarios. Integrated real-time scenarios using custom objects, triggers, and approval processes to deliver a working solution for complex business problems.",
  },
];

function Experience() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  return (
    <section
      ref={targetRef}
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-[#f3e8ff] to-[#e0f2fe] text-gray-800"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-indigo-600">
        💼 My Journey So Far
      </h2>

      <div className="relative max-w-2xl mx-auto">
        {/* Background timeline line */}
        <div className="absolute left-4 top-0 w-1 h-full bg-indigo-200 origin-top rounded" />
        {/* Animated progress line */}
        <motion.div
          style={{ scaleY: lineHeight }}
          className="absolute left-4 top-0 w-1 h-full bg-sky-500 origin-top rounded"
        />

        <div className="flex flex-col gap-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="pl-12 relative"
            >
              {/* Dot */}
              <motion.div
                className="absolute top-1 left-2 w-4 h-4 rounded-full bg-white border-4 border-sky-500 shadow-md"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />

              <p className="text-sm font-semibold text-sky-500">{exp.duration}</p>
              <h3 className="text-2xl font-semibold text-gray-900 mt-1">{exp.title}</h3>
              <p className="text-gray-600 mt-1 mb-3 font-medium">{exp.company}</p>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
