import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ritesh Kumar</span>{" "}
            from <span className="purple">Patna, India</span>.
            <br />
            I’m currently seeking for a{" "}
            <span className="purple">Entry Level Job</span> at{" "}
            <span className="purple">reputaed organization</span>.
            <br />Currently Pursuing B.tech in{" "}
            <span className="purple">Computer Science And Engineering</span> from{" "}
            <span className="purple">VGU, Jaipur</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Each step you take shapes the future you’re chasing!"{" "}
          </p>
          <footer className="blockquote-footer">Ritesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
