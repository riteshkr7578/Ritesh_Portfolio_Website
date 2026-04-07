import React from "react";
import Tilt from "react-parallax-tilt";
import Avatar3 from "../../Assets/Avatar3.jpeg";

function Home2() {
  return (
    <div className="relative z-10 py-20 home-about-section" id="about">
      <div className="relative px-6 mx-auto max-w-7xl md:px-12">

        {/* TEXT CONTENT */}
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-left md:text-5xl">
            LET ME <span className="ml-2 text-purple-primary">INTRODUCE</span> MYSELF
          </h1>

          <p className="text-base leading-relaxed text-left md:text-lg">
            I am a Full Stack Developer specializing in the MERN stack and currently pursuing a B.Tech in Computer Science. I am passionate about transforming ideas into reliable, scalable products, <br />with robust skills in React, Node.js, Express, MongoDB, and Python.
            <br /><br />

            I’m proficient in
            <i>
              <b className="purple"> JavaScript, Python, and Node.js </b>
            </i>
            — and I enjoy working across both backend <br />and frontend stacks.
            <br /><br />

            My key areas of interest include developing
            <i>
              <b className="purple"> Full Stack Web Applications, Python Development, </b>
            </i>
            and exploring new ways to design and developed an system.
            <br /><br />

            Whenever possible, I love building projects with
            <b className="purple"> Node.js </b> and modern frameworks like{" "}
            <i>
              <b className="purple">React.js</b> <br /> and{" "}
              <b className="purple">Express.js</b>.
            </i>
          </p>
        </div>

        {/* IMAGE (FLOATING RIGHT) */}
        <div className="absolute hidden -translate-y-1/2 md:block right-12 top-1/2">
          <Tilt>
            <img
              src={Avatar3}
              alt="avatar"
              className="rounded-lg"
              style={{
                maxHeight: "420px",
                width: "auto",
                objectFit: "cover",
              }}
            />
          </Tilt>
        </div>

      </div>
    </div>
  );
}

export default Home2;