import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-20"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bj62LCEWqVRz-PUBo0UWxXHmYL1eNbgZxQ&s')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          I'm Akshaya — Developer. Designer. Creator.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed text-gray-200"
        >
          <p>
            I’m a passionate{" "}
            <span className="text-blue-400 font-semibold">Full Stack Developer</span>
            creating seamless, high-performance web applications using modern
            technologies like React, Node.js, MongoDB, and TailwindCSS.
          </p>

          <p>
            My focus lies in building scalable, accessible, and aesthetic user
            interfaces that bring ideas to life and solve real-world problems
            through technology.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
            "Coding is my canvas, creativity is my code — and every product is a
            work of passion."
            <cite className="block mt-2 not-italic text-white font-medium">— Akshaya</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
