import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <div className="about-section relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Content */}
            <div className="pt-8 md:pt-0">
              <h1 className="text-4xl md:text-5xl font-bold pb-5">
                About <strong className="text-purple-primary">Me</strong>
              </h1>
              <Aboutcard />
            </div>

            {/* Right Image */}
            <div className="pt-0 md:pt-28 flex justify-center">
              <img src={laptopImg} alt="about" className="w-full max-w-md" />
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Professional <strong className="text-purple-primary">Skillset</strong>
            </h1>
            <Techstack />
          </div>

          {/* Tools Section */}
          <div className="mt-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <strong className="text-purple-primary">Tools</strong> I use
            </h1>
            <Toolstack />
          </div>

          {/* GitHub Section */}
          <div className="mt-16">
            <Github />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
