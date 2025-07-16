import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experienceData = [
  {
    title: "Salesforce Developer Intern",
    company: "SmartBridge",
    duration: "2 months",
    description:
      "Successfully completed a Salesforce capstone project involving Apex Classes, LWC Components, Validation Rules, Screen Flows, and Deployment. Integrated real-time scenarios using custom objects and delivered a working solution for business problems.",
  },
  {
    title: "Next Role",
    company: "Future Company",
    duration: "Present",
    description: "Description of your next amazing role.",
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
