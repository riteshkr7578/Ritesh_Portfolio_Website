import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <Container
      fluid
      className="home-about-section experience-section"
      id="experience"
    >
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.3em" }}>
              MY <span className="purple"> EXPERIENCE </span>
            </h1>

            <p className="home-about-body">
              <b className="purple">Full Stack Developer Intern</b>
              <br />
              Tensax Innovation Lab · Jaipur, India
              <br />
              <i>Feb 2025 – May 2025</i>
              <br />
              <br />
              • Worked on full-stack web applications using{" "}
              <b className="purple">React, Node.js, Express, MongoDB</b>.
              <br />
              • Built reusable UI components and integrated secure
              authentication workflows.
              <br />
              • Collaborated with cross-functional teams to deliver scalable,
              production-ready features.
              <br />
              <br />

              <b className="purple">Web Developer Intern</b>
              <br />
              InternPe · Remote
              <br />
              <i>May 2024 - June 2024</i>
              <br />
              <br />
              • Developed responsive frontend components using{" "}
              <b className="purple">React.js</b> and modern CSS practices.
              <br />
              • Implemented API integrations and basic authentication flows.
              <br />
              • Gained hands-on experience with real-world development tasks
              and deadlines.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;