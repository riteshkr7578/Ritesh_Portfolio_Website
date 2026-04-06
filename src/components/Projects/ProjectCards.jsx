import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="project-card-view bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-primary/40 transition-all duration-500 h-full hover:scale-105 hover:-translate-y-2"
      style={{
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        backgroundColor: "rgba(25, 25, 30, 0.7)",
      }}
    >
      {/* Image Container */}
      <div 
        className="card-img-top p-5 bg-cover bg-center"
        style={{
          backgroundImage: `url(${props.imgPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          opacity: 1,
          height: '250px',
        }}
      />

      {/* Card Body */}
      <div className="p-6">
        {/* Title */}
        <h5 className="text-lg font-bold mb-3" style={{ color: "#ffffff" }}>
          {props.title}
        </h5>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 text-justify">
          {props.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            style={{
              backgroundColor: "#a855f7",
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </a>

          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              style={{
                backgroundColor: "#a855f7",
              }}
            >
              <CgWebsite /> &nbsp;
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
