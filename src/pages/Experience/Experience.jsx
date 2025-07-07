import React from "react";
import { Network, Layers } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 w-full aspect-square">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-[2rem_1rem_3rem_1rem]" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[3px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-[2rem_1rem_3rem_1rem] opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-[2rem_1rem_3rem_1rem] p-8 h-full border border-gray-700/40 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-4">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 rounded-full blur-xl group-hover:opacity-60 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "UI/UX Designer Intern",
      company: "Bluestock Finetech",
      period: "2024",
      description:
        "As a UI/UX Designer Intern, I contributed to designing clean, intuitive, and modern interfaces for web platforms. My responsibilities included creating wireframes, high-fidelity mockups, and interactive prototypes using Figma. I collaborated with the development team to ensure design consistency across devices and integrated feedback from usability testing to enhance user experience.",
    },
    {
      icon: Layers,
      title: "Frontend Developer Intern",
      company: "Mediwave Digital",
      period: "2023 - 2024",
      description:
        "During my internship as a Frontend Developer, I was involved in translating UI designs into dynamic, interactive web applications. I developed reusable React components, optimized performance for faster load times, and implemented best practices for responsive and accessible design. I worked closely with backend developers to integrate APIs and ensure seamless functionality.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[#04081A]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-6 mt-10">
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
