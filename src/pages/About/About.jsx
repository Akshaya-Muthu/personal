import React from "react";
import HeroImg from "@/assets/images/hero.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 text-white overflow-hidden"
      style={{ backgroundColor: "#050812" }} // Much darker navy
    >
      {/* Abstract floating shapes (bubbles-like) */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-purple-600 opacity-20 rounded-full blur-3xl animate-float-slow z-0"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-2xl animate-float-fast z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-52 h-52 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-float-mid z-0"></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-lg leading-relaxed text-gray-300"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            I'm Akshaya — Developer. Designer. Innovator.
          </h2>

          <p>
            I’m a passionate{" "}
            <span className="text-blue-400 font-semibold">Full Stack Developer</span>
            crafting beautiful, scalable applications that make a difference.
          </p>

          <p>
            My goal is to bring clarity and performance together, turning ideas
            into functional digital experiences through frontend and backend expertise.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
            "Building meaningful software with creativity, clean code, and consistency."
            <cite className="block mt-2 not-italic text-white font-medium">— Akshaya</cite>
          </blockquote>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={HeroImg}
            alt="Akshaya working"
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
