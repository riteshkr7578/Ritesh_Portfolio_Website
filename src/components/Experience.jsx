import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Nodesure Technologies",
      location: "Jaipur, India",
      period: "Feb 2026 – Present",
      details: [
        "Contributed to the development of a production-grade CRM platform (Connverz) using Laravel, Vue.js, Inertia.js, and MySQL, enhancing campaign management, automation flows, and user engagement features",
        "Designed and implemented scalable RESTful APIs using Laravel and Eloquent ORM, improving system reliability and backend performance",
        "Built reusable and responsive Vue.js components, optimizing UI consistency, modularity, and user experience across dashboard, campaigns, and contact modules",
        "Integrated third-party services including Stripe, Razorpay, Meta WhatsApp APIs, and ElevenLabs TTS to enable payments, messaging automation, and real-time AI voice capabilities",
        "Developed an AI-powered Voice Agent platform using Node.js and Express, enabling real-time speech generation, dynamic voice selection, and AI-driven call workflows",
        "Engineered a Weaviate Vector Database client with React and Express, including a GraphQL explorer, semantic search, and organization-based data isolation"
      ]
    },
    {
      title: "Full Stack Intern",
      company: "Tensax Innovation Lab",
      location: "Jaipur, India",
      period: "Feb 2025 – May 2025",
      details: [
        "Contributed to the development of web and hybrid applications using React.js and SvelteKit",
        "Improved frontend performance through optimized component rendering, lazy loading, and efficient state management",
        "Implemented authentication and authorization features using MongoDB Atlas and JWT-based token systems",
        "Developed reusable UI components using Tailwind CSS to support scalable and consistent frontend development",
        "Assisted in building RESTful APIs and backend features within the MERN stack",
        "Debugged application issues and optimized MongoDB queries to improve response time and reliability"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "InternPe",
      location: "Remote",
      period: "May 27, 2024 – Aug 23, 2024",
      details: [
        "Built responsive and user-centric frontend systems for multiple projects including a full-stack E-commerce platform",
        "Developed dynamic UI modules using React.js and modern JavaScript (ES6+), ensuring cross-browser compatibility",
        "Integrated RESTful APIs and handled asynchronous data flows using Axios and state management techniques",
        "Collaborated in an agile remote team using Git-based workflows, contributing in sprint-based feature releases"
      ]
    }
  ];

  return (
    <Container
      fluid
      className="home-about-section experience-section"
      id="experience"
    >
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.3em", marginBottom: "50px" }}>
              MY <span className="purple"> EXPERIENCE </span>
            </h1>

            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <div className="experience-meta">
                      <p className="experience-period">{exp.period}</p>
                      <p className="experience-location">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="experience-details">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;