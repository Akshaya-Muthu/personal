import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 text-white overflow-hidden"
      style={{
        backgroundColor: "#030712", // Very dark navy
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')", // Optional developer-themed texture
        backgroundSize: "contain",
      }}
    >
      {/* Abstract floating blobs */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute top-1/3 right-1/4 w-52 h-52 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse z-0" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-lg leading-relaxed text-gray-300"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
             Developer. Designer. Innovator.
          </h2>

          <p>
            I'm a <span className="text-blue-400 font-semibold">Full Stack Developer</span> passionate about
            building clean, scalable, and user-friendly digital experiences.
            Whether it’s crafting intuitive UIs or building robust backend APIs,
            I thrive in creating solutions that solve real-world problems.
          </p>

          <p>
            I believe in clean code, lifelong learning, and delivering products that
            are both beautiful and performant. My stack includes technologies like
            React, Node.js, Express, MongoDB, and more.
          </p>

          <p>
            Beyond code, I enjoy experimenting with design systems, contributing to open-source,
            and mentoring junior developers.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
            "Software development isn't just about code — it's about building meaningful
            experiences that make people's lives better."
            <cite className="block mt-2 not-italic text-white font-medium">— Akshaya</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
