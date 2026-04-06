import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Ritesh Kumar</span>, a Full Stack Developer from <span className="purple">Jaipur, Rajasthan</span>. I specialize in MERN stack development and currently work as a Software Development Engineer Intern at <span className="purple">Nodesure Technologies</span>.
            <br />
            <br />
            Currently pursuing B.Tech in <span className="purple">Computer Science Engineering</span> from <span className="purple">Vivekananda Global University</span> with a CGPA of <span className="purple">8.30/10</span>.
            <br />
            <br />
            My expertise includes:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Full Stack Web Development (MERN)
            </li>
            <li className="about-activity">
              <ImPointRight /> RESTful APIs & Authentication (JWT)
            </li>
            <li className="about-activity">
              <ImPointRight /> Database Design (MongoDB, MySQL)
            </li>
            <li className="about-activity">
              <ImPointRight /> Third-party Integrations (Razorpay, Stripe)
            </li>
            <li className="about-activity">
              <ImPointRight /> Performance Optimization & Deployment
            </li>
          </ul>

          <p style={{ color: "var(--imp-text-color)", opacity: 0.8 }}>
            "Building scalable solutions that make a real impact." 💡
          </p>
          <footer className="blockquote-footer">Ritesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
