import React from "react";

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
    <div
      className="home-about-section experience-section relative z-10 pb-12 pt-2"
      id="experience"
      style={{ backgroundColor: "#0a0a0c" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            MY <span className="text-purple-primary ml-2">EXPERIENCE</span>
          </h1>

          <div className="experience-timeline space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card bg-dark-card border border-dark-border rounded-lg p-8 relative overflow-hidden hover:translate-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-primary/20"
                style={{
                  backgroundColor: "rgba(25, 25, 30, 0.7)",
                  borderLeft: "4px solid #a855f7",
                }}
              >
                {/* Header */}
                <div
                  className="experience-header grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pb-6 border-b border-dark-border"
                >
                  {/* Title Section */}
                  <div className="experience-title-section">
                    <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: "#ffffff" }}>
                      {exp.title}
                    </h3>
                    <p className="text-lg font-bold text-purple-primary">
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta Section */}
                  <div className="experience-meta text-right md:text-right">
                    <p className="font-semibold text-purple-primary">
                      {exp.period}
                    </p>
                    <p className="text-sm opacity-80" style={{ color: "#ffffff" }}>
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Details List */}
                <ul className="experience-details list-none p-0 m-0">
                  {exp.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="relative pl-6 mb-3 last:mb-0"
                      style={{
                        fontSize: "1em",
                        color: "#ffffff",
                        lineHeight: "1.6",
                      }}
                    >
                      <span
                        className="absolute left-0 text-purple-primary font-bold"
                      >
                        ▸
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;