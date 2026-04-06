import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="quote-card-view border-none bg-transparent p-6" style={{ backgroundColor: "transparent" }}>
      <blockquote className="mb-0">
        <p style={{ textAlign: "justify", color: "#ffffff" }}>
          Hi! I'm <span className="text-purple-primary font-semibold">Ritesh Kumar</span>, a Full Stack Developer from <span className="text-purple-primary font-semibold">Jaipur, Rajasthan</span>. I specialize in MERN stack development and currently work as a Software Development Engineer Intern at <span className="text-purple-primary font-semibold">Nodesure Technologies</span>.
          <br />
          <br />
          Currently pursuing B.Tech in <span className="text-purple-primary font-semibold">Computer Science Engineering</span> from <span className="text-purple-primary font-semibold">Vivekananda Global University</span> with a CGPA of <span className="text-purple-primary font-semibold">8.30/10</span>.
          <br />
          <br />
          My expertise includes:
        </p>

        <ul style={{ textAlign: "left", listStyle: "none", paddingLeft: 0 }}>
          <li className="about-activity flex items-center gap-2 py-1">
            <ImPointRight className="text-purple-primary" /> Full Stack Web Development (MERN)
          </li>
          <li className="about-activity flex items-center gap-2 py-1">
            <ImPointRight className="text-purple-primary" /> RESTful APIs & Authentication (JWT)
          </li>
          <li className="about-activity flex items-center gap-2 py-1">
            <ImPointRight className="text-purple-primary" /> Database Design (MongoDB, MySQL)
          </li>
          <li className="about-activity flex items-center gap-2 py-1">
            <ImPointRight className="text-purple-primary" /> Third-party Integrations (Razorpay, Stripe)
          </li>
          <li className="about-activity flex items-center gap-2 py-1">
            <ImPointRight className="text-purple-primary" /> Performance Optimization & Deployment
          </li>
        </ul>

        <p style={{ color: "#a855f7", opacity: 0.8, marginTop: "20px" }}>
          "Building scalable solutions that make a real impact." 💡
        </p>
        <footer className="blockquote-footer" style={{ color: "#a855f7", opacity: 0.8 }}>Ritesh</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
