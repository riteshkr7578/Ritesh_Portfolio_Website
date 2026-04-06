import React from "react";
import Tilt from "react-parallax-tilt";
import Avatar3 from "../../Assets/Avatar3.jpeg";

function Home2() {
  return (
    <div className="home-about-section relative z-10 py-16" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="home-about-description">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LET ME <span className="text-purple-primary ml-2">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Full Stack Developer specializing in the MERN stack and currently pursuing a B.Tech in Computer Science. I am passionate about transforming ideas into reliable, scalable products, with robust skills in React, Node.js, Express, MongoDB, and Python.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Applications, Python Development,{" "}
                </b>
              </i>
              and exploring new ways to design and developed an system.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Express.js</b>.
              </i>
            </p>
          </div>
          <div className="home-about-image">
            <Tilt>
              <img 
                src={Avatar3} 
                className="w-full rounded-lg" 
                alt="avatar" 
                style={{ 
                  maxHeight: "450px",
                  width: "auto", 
                  objectFit: "cover" 
                }} 
              />
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
