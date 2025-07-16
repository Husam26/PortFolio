import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-200 opacity-20 rounded-full blur-2xl animate-spin-slow z-0" />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 px-6 py-12">
        {/* 👨‍💻 Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left lg:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            <TypeAnimation
              sequence={[
                "Hey, I'm Husam 👋", // First line
                2000, // Wait 2s
                "A Full Stack Dev 🚀",
                2000,
                "A Salesforce Wizard 🧙‍♂️",
                2000,
                "An AI Explorer 🤖",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block text-blue-600"
            />
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl italic">
            Crafting digital magic with code, creativity, and curiosity.
          </p>

          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition hover:scale-105"
          >
            🚀 See My Work
          </a>
        </motion.div>

        {/* 🧑‍🎨 Avatar Image */}
        {/* 🧑‍🎨 Avatar Image with Aesthetic Animation */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
  className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative"
>
  {/* Glow ring background */}
  <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-tr from-blue-200 to-purple-300 blur-2xl opacity-30 z-0" />

  {/* Animated Avatar Image */}
  <motion.img
    src="/avatar.png"
    alt="Cartoon Avatar"
    className="relative z-10 max-w-[500px] md:max-w-[650px] rounded-xl shadow-2xl object-contain"
    animate={{
      y: [0, -10, 0],       // vertical float
      rotate: [0, 1.5, 0],  // slight rotation
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>

      </div>
    </section>
  );
}

export default Hero;
