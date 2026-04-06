import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Avatar3 from "../../Assets/Avatar3.jpeg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
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
          </Col>
          <Col md={4} className="myAvtar">
  <Tilt>
    <img 
      src={Avatar3} 
      className="img-fluid" 
      alt="avatar" 
      style={{ 
        maxHeight: "450px",  // Adjust this value to match your design
        width: "auto", 
        borderRadius: "10px", // Optional: adds a slight curve like the screenshot
        objectFit: "cover" 
      }} 
    />
  </Tilt>
</Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
