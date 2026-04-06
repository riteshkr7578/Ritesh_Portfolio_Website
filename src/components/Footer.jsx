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
    <footer className="footer pt-3 pb-2" style={{ backgroundColor: isDarkMode ? "rgba(18, 18, 22, 0.85)" : "#f5f5f7" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <ul className="footer-icons flex justify-center md:justify-end gap-4 list-none p-0">
              <li className="social-icons">
                <a
                  href="https://github.com/riteshkr7578"
                  style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-primary transition-colors"
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
                  className="hover:text-purple-primary transition-colors"
                >
                  <AiOutlineTwitter size={24} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ritesh-kumar-732535221/"
                  style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-primary transition-colors"
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
                  className="hover:text-purple-primary transition-colors"
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
