import React from "react";
import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Developer, Designer, Creator, Innovator
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Image */}
          <div className="relative mb-6 sm:mb-0">
            <div className="aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent bg-gradient-to-b">
              <img
                src={HeroImg}
                alt="Hero"
                className="rounded-[15px] shadow block w-full h-auto"
                width={1207}
                height={929}
              />
            </div>
          </div>

          {/* Text */}
          <div className="relative space-y-4">
            <p>
              Hello! I'm Akshaya, a passionate Full Stack Developer specializing
              in building innovative web solutions and user-friendly interfaces.{" "}
              <span className="font-bold text-white">
                As the creator of the OlovaJS UI Framework,
              </span>{" "}
              I'm dedicated to simplifying development workflows.
            </p>

            <p>
              I focus on making web development faster, easier, and more
              accessible. Currently, I'm expanding into backend development to
              grow as a full-stack engineer and build seamless, robust
              applications.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p>
                  I'm a lifelong learner and innovator, driven by a desire to
                  contribute to the developer community with real tools and
                  ideas. As the creator of OlovaJS, I'm pushing the boundaries
                  of JavaScript frameworks to empower developers worldwide.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium text-white">
                    Akshaya, Creator of
                  </cite>
                  <div className="flex items-center gap-2">
                    <img
                      src={OlovaLogo}
                      alt="Olova Logo"
                      className="h-5 w-auto"
                      height={20}
                    />
                    <span className="text-white">Freelance Hub</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
