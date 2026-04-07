import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

function Footer() {
  const { isDarkMode } = useTheme();
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <footer className="pt-3 pb-2 footer" style={{ backgroundColor: isDarkMode ? "rgba(18, 18, 22, 0.85)" : "#f5f5f7" }}>
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Copyright Left */}
          <div className="text-center md:text-left">
            <h3 className="text-sm md:text-base" style={{ color: isDarkMode ? "#ffffff" : "#333333" }}>Designed and Developed by Ritesh Kumar</h3>
          </div>

          {/* Copyright Center */}
          <div className="text-center">
            <h3 className="text-sm md:text-base" style={{ color: isDarkMode ? "#ffffff" : "#333333" }}>Copyright © {year} Ritesh</h3>
          </div>

          {/* Social Icons Right */}
          <div className="text-center md:text-right">
            <ul className="flex justify-center gap-4 p-0 list-none footer-icons md:justify-end">
              <li className="social-icons">
                <a
                  href="https://github.com/riteshkr7578"
                  style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-purple-primary"
                >
                  <AiFillGithub size={24} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/riteshc75786278"
                  style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-purple-primary"
                >
                  <AiOutlineTwitter size={24} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/riteshkr7578/"
                  style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-purple-primary"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ritesh_chaurasiya11"
                  style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-purple-primary"
                >
                  <AiFillInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
