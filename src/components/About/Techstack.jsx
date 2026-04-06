import React from "react";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import EXPRESS from "../../Assets/TechIcons/express.svg";
import Laravel from "../../Assets/TechIcons/laravel.webp";

function Techstack() {
  const techs = [
    { src: Javascript, name: 'Javascript' },
    { src: Python, name: 'Python' },
    { src: ReactIcon, name: 'React.Js' },
    { src: Typescript, name: 'TypeScript' },
    { src: Node, name: 'Node.Js' },
    { src: EXPRESS, name: 'Express.Js' },
    { src: Mongo, name: 'Mongo DB' },
    { src: Redux, name: 'Redux' },
    { src: Git, name: 'Git' },
    { src: Firebase, name: 'Firebase' },
    { src: SQL, name: 'Postgresql' },
    { src: Tailwind, name: 'Tailwind CSS' },
    { src: Postman, name: 'Postman' },
    { src: AWS, name: 'AWS' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12 px-4">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="tech-icons flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg border border-dark-border bg-dark-card hover:border-purple-primary transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: 'rgba(25, 25, 30, 0.7)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            minWidth: '120px'
          }}
        >
          <img
            src={tech.src}
            alt={tech.name}
            style={{
              height: '40px',
              width: 'auto',
              filter: 'grayscale(10%)',
              transition: '0.3s'
            }}
            className="hover:brightness-110"
          />
          <div className="tech-icons-text text-sm text-center">{tech.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
