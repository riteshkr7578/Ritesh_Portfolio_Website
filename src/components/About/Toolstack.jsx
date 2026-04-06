import React from "react";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import PYCHARM from "../../Assets/TechIcons/pycharm.png";
import Antigravity from "../../Assets/TechIcons/antigravity.webp";

function Toolstack() {
  const tools = [
    { src: macOs, name: 'Window Os' },
    { src: chrome, name: 'Google Chrome' },
    { src: vsCode, name: 'Vs Code' },
    { src: PYCHARM, name: 'PyCharm' },
    { src: Antigravity, name: 'Antigravity' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12 px-4">
      {tools.map((tool, index) => (
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
            src={tool.src}
            alt={tool.name}
            className="tech-icon-images"
            style={{
              height: '40px',
              width: 'auto',
              filter: 'grayscale(10%)',
              transition: '0.3s'
            }}
          />
          <div className="tech-icons-text text-sm text-center">{tool.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
