import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import PortfolioPage from "@/pages/About/About";

// Grid background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect
            width="40"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-40 animate-gridPulse"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

// Roaming gradient bubbles background (smaller + more bubbles + smoother)
const RoamingBubblesBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(40)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 opacity-20 animate-bubbleRoam"
        style={{
          width: `${Math.random() * 10 + 6}px`,   // 6px to 16px
          height: `${Math.random() * 10 + 6}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 20 + 15}s`,  // 15s to 35s
          animationDelay: `${Math.random() * 10}s`,
        }}
      ></div>
    ))}
  </div>
);

export default function Hero() {
  const words = [
    "Full-Stack Developer & UI/UX Enthusiast",
    "JavaScript Developer & Creator of Olova.js",
    "Learning MERN Stack",
    "Linux & GitHub for DevOps Enthusiast",
  ];

  const [code] = useState(`
const profile = {
  name: '<span class="gradient-text">Akshaya M</span>',
  title: 'Full-Stack Developer | UI/UX Designer | Problem Solver',
  skills: [
    '<span class="gradient-text">React</span>', '<span class="gradient-text">NodeJS</span>', 'Redux', 'Express',
    'MySQL', '<span class="gradient-text">MongoDB</span>', 'AWS', 'JavaScript',
    'Git', 'Discord Development'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: '<span class="gradient-text">Fresher</span>',
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};
`);

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      .gradient-text {
        background: linear-gradient(to right, #3b82f6, #9333ea);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      @keyframes bubbleRoam {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 0.2;
        }
        25% {
          transform: translate(40px, -20px) scale(1.1);
          opacity: 0.3;
        }
        50% {
          transform: translate(-40px, 40px) scale(1.2);
          opacity: 0.4;
        }
        75% {
          transform: translate(30px, -40px) scale(1.1);
          opacity: 0.3;
        }
        100% {
          transform: translate(0, 0) scale(1);
          opacity: 0.2;
        }
      }
      .animate-bubbleRoam {
        animation: bubbleRoam linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden">
      <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
        <GridBackground />
        <RoamingBubblesBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs font-medium">Welcome to my universe</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <SparklesText text="Hello" /> I'm
              <span className="gradient-text"> Akshaya M</span>
            </h1>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <span>
                <FlipWords className="text-lg text-blue-400 font-medium" words={words} />
              </span>
            </div>

            <p className="text-base sm:text-xl text-gray-300/90 mb-8 max-w-xl">
              JavaScript lover 🚀 | Freelance Hub Developer 🔧 | Crafting frameworks and coding the future 💻✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/Akshaya-Muthu"
                className="bg-gradient-to-r from-blue-500 to-teal-400 px-6 py-3 rounded-lg text-white font-semibold text-center hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
              <a
                href="https://drive.google.com/file/d/19f5UigLVJtiDwOjltLbuqhPPn1k8UVpU/view?usp=drivesdk"
                className="bg-gray-800 px-6 py-3 rounded-lg text-gray-300 font-semibold text-center hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Resume
              </a>
            </div>
          </div>

          {/* Right code block */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#091121] rounded-lg overflow-hidden shadow-lg">
              <div className="flex items-center space-x-2 p-2 bg-[#0f172a]">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400 ml-2">developer.js</span>
              </div>
              <pre className="language-javascript">
                <code
                  className="language-javascript"
                  dangerouslySetInnerHTML={{ __html: code }}
                ></code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-gray-400 text-sm flex items-center gap-2">
          <i className="fas fa-mouse text-blue-400"></i>
          About me
        </span>
        <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
      </div>

      <PortfolioPage />
    </main>
  );
}
