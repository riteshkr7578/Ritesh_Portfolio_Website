import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LearnED from "../../Assets/Projects/LearnED.png";
import FLASK from "../../Assets/Projects/FLASK.png";
import JobLane from "../../Assets/Projects/JobLane.png";
import MOVEEASE from "../../Assets/Projects/moveease.png";
import FASHION from "../../Assets/Projects/Fashion.png";
import TalkFusion from "../../Assets/Projects/TalkFusion.png";
import Task from "../../Assets/Projects/Task.png"
import Blog from "../../Assets/Projects/Blog.png"

function Projects() {
  const projects = [
    {
      imgPath: MOVEEASE,
      isBlog: false,
      title: "Move-Ease",
      description: "Built a full-stack movers marketplace using React, Node.js, and MongoDB, featuring a custom dashboard and secure JWT authentication. Integrated Google Maps APIs to automate logistics, enabling real-time distance calculations and dynamic pricing for seamless user bookings.",
      ghLink: "https://github.com/riteshkr7578/MoveEase---The-smartway-to-move",
      demoLink: "https://move-ease-the-smartway-to-move.vercel.app/"
    },
    {
      imgPath: TalkFusion,
      isBlog: false,
      title: "Talk-Fusion",
      description: "Developed TalkFusion, a high-performance AI chat platform integrating Groq's Llama-3.1 via FastAPI for low-latency, natural language processing. Engineered a responsive React interface with secure REST API communication, fully deployed on Vercel and Render with automated cloud scaling.",
      ghLink: "https://github.com/riteshkr7578/Talk-Fusion",
      demoLink: "https://talk-fusion-chat.vercel.app/"
    },
    {
      imgPath: Blog,
      isBlog: false,
      title: "✍️ BlogSphere – Full Stack Content Management Platform",
      description: "A full-stack Blog Platform built using the MERN stack, allowing users to create, manage, and publish blog posts with rich text content, images, categories, comments, likes, and a draft–publish workflow. The application is designed to reflect real-world content management behavior with proper authentication, authorization, and clean UI.",
      ghLink: "https://github.com/riteshkr7578/Blog-Platform-MERN",
      demoLink: "https://github.com/riteshkr7578/Blog-Platform-MERN"
    },
    {
      imgPath: Task,
      isBlog: false,
      title: "📝 Task Management System",
      description: "A full-stack Task Management System built using Next.js, Node.js, Express, Prisma ORM, and MySQL, featuring secure JWT authentication, protected routes, and complete task CRUD functionality.",
      ghLink: "https://github.com/riteshkr7578/Task-Management-System",
      demoLink: "https://github.com/riteshkr7578/Task-Management-System"
    },
    {
      imgPath: JobLane,
      isBlog: false,
      title: "Job-Lane",
      description: "JobLane is a full-stack MERN-based job portal designed to connect job seekers with recruiters. It features secure authentication, role-based access, job posting & management, and a responsive UI for a seamless user experience. Built with a focus on usability, clean design, and end-to-end functionality.",
      ghLink: "https://github.com/riteshkr7578/JobLane--Connecting-Talent-and-Opportunity",
      demoLink: "https://github.com/riteshkr7578/JobLane--Connecting-Talent-and-Opportunity"
    },
    {
      imgPath: LearnED,
      isBlog: false,
      title: "LearnED",
      description: "Built a responsive, mobile-first EdTech platform from scratch, leveraging Bootstrap and JavaScript for dynamic navigation and enhanced interactivity. Prioritized UI/UX research to engineer an intuitive, user-centric interface featuring professional typography and a cohesive design system for learners and educators.",
      ghLink: "https://github.com/riteshkr7578/LearnEd",
      demoLink: "https://riteshkr7578.github.io/LearnEd/"
    },
    {
      imgPath: FASHION,
      isBlog: false,
      title: "Fashion-Hub",
      description: "Developed FashionHub, a responsive e-commerce storefront optimized for cross-device accessibility and performance. Engineered core shopping features, including dynamic product listings and a functional shopping cart, ensuring a seamless user journey from browsing to checkout.",
      ghLink: "https://github.com/riteshkr7578/e-commerce",
      demoLink: "https://riteshkr7578.github.io/e-commerce/"
    },
    {
      imgPath: FLASK,
      isBlog: false,
      title: "TO-DO Flask App",
      description: "Developed a lightweight CRUD application using Flask and SQLite to streamline personal task management. Implemented features for creating, updating, and deleting tasks with a clean, responsive UI, focusing on efficient backend routing and database integration for persistent data storage.",
      ghLink: "https://github.com/riteshkr7578/TO-DO-flask-app",
      demoLink: null
    }
  ];

  return (
    <div className="project-section relative z-10 pt-20 pb-8">
      <Particle />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My Recent <strong className="text-purple-primary">Works</strong>
        </h1>
        <p className="text-center text-base md:text-lg mb-12">Here are a few projects I've worked on recently.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card pt-12 pb-12 px-6 md:px-0">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;


