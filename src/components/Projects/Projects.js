import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LearnED from "../../Assets/Projects/LearnED.png";
import FLASK from "../../Assets/Projects/FLASK.png";
import JobLane from "../../Assets/Projects/JobLane.png";
import MOVEEASE from "../../Assets/Projects/moveease.png";
import FASHION from "../../Assets/Projects/Fashion.png";
import TalkFusion from "../../Assets/Projects/TalkFusion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MOVEEASE}
              isBlog={false}
              title="Move-Ease"
              description="Built a full-stack movers marketplace using React, Node.js, and MongoDB, featuring a custom dashboard and secure JWT authentication. Integrated Google Maps APIs to automate logistics, enabling real-time distance calculations and dynamic pricing for seamless user bookings."
              ghLink="https://github.com/riteshkr7578/MoveEase---The-smartway-to-move"
              demoLink="https://move-ease-the-smartway-to-move.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TalkFusion}
              isBlog={false}
              title="Talk-Fusion"
              description="Developed TalkFusion, a high-performance AI chat platform integrating Groq’s Llama-3.1 via FastAPI for low-latency, natural language processing. Engineered a responsive React interface with secure REST API communication, fully deployed on Vercel and Render with automated cloud scaling."
              ghLink="https://github.com/riteshkr7578/Talk-Fusion"
              demoLink="https://talk-fusion-chat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JobLane}
              isBlog={false}
              title="Job-Lane"
              description="JobLane is a full-stack MERN-based job portal designed to connect job seekers with recruiters. It features secure authentication, role-based access, job posting & management, and a responsive UI for a seamless user experience. Built with a focus on usability, clean design, and end-to-end functionality."
              ghLink="https://github.com/riteshkr7578/JobLane--Connecting-Talent-and-Opportunity"
              demoLink="https://github.com/riteshkr7578/JobLane--Connecting-Talent-and-Opportunity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearnED}
              isBlog={false}
              title="LearnED"
              description="Built a responsive, mobile-first EdTech platform from scratch, leveraging Bootstrap and JavaScript for dynamic navigation and enhanced interactivity. Prioritized UI/UX research to engineer an intuitive, user-centric interface featuring professional typography and a cohesive design system for learners and educators."
              ghLink="https://github.com/riteshkr7578/LearnEd"
              demoLink="https://riteshkr7578.github.io/LearnEd/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FASHION}
              isBlog={false}
              title="Fashion-Hub"
              description="Developed FashionHub, a responsive e-commerce storefront optimized for cross-device accessibility and performance. Engineered core shopping features, including dynamic product listings and a functional shopping cart, ensuring a seamless user journey from browsing to checkout."
              ghLink="https://github.com/riteshkr7578/e-commerce"
              demoLink="https://riteshkr7578.github.io/e-commerce/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FLASK}
              isBlog={false}
              title="TO-DO Flask App"
              description="Developed a lightweight CRUD application using Flask and SQLite to streamline personal task management. Implemented features for creating, updating, and deleting tasks with a clean, responsive UI, focusing on efficient backend routing and database integration for persistent data storage."
              ghLink="https://github.com/riteshkr7578/TO-DO-flask-app"
              // demoLink="https:/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
