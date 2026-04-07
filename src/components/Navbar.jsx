import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useTheme } from "../ThemeContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        navColour
          ? "border-b-2 border-purple-primary/30"
          : ""
      } ${isDarkMode ? "dark" : "light"}`}
      style={{
        backgroundColor: isDarkMode ? "rgba(10, 10, 12, 0.8)" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-8">
        <div className="flex justify-between items-center py-1.5">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center px-2 py-1 text-lg font-bold tracking-wide transition-all duration-300 rounded-lg hover:bg-dark-card"
            style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
          >
            RK<span className="text-purple-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="items-center hidden gap-6 text-base font-medium md:flex">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <AiOutlineHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <AiOutlineUser />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="flex items-center gap-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <AiOutlineFundProjectionScreen />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="flex items-center gap-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <CgFileDocument />
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <AiOutlineMail />
                Contact
              </Link>
            </li>

            {/* Theme Toggle Button */}
            <li className="ml-3">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 transition-transform duration-300 rounded-full hover:scale-110 active:scale-95"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.03)",
                  border: isDarkMode
                    ? "1.5px solid rgba(255, 255, 255, 0.2)"
                    : "1.5px solid rgba(0, 0, 0, 0.2)",
                  height: "40px",
                  width: "40px",
                }}
              >
                {isDarkMode ? (
                  <Sun size={18} color="#fbbf24" strokeWidth={2.5} />
                ) : (
                  <Moon size={18} color="#1a1a1c" strokeWidth={2.5} />
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 transition-transform duration-300 rounded-full"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.03)",
                border: isDarkMode
                  ? "1.5px solid rgba(255, 255, 255, 0.2)"
                  : "1.5px solid rgba(0, 0, 0, 0.2)",
              }}
            >
              {isDarkMode ? (
                <Sun size={18} color="#fbbf24" strokeWidth={2.5} />
              ) : (
                <Moon size={18} color="#1a1a1c" strokeWidth={2.5} />
              )}
            </button>

            <button
              onClick={() => updateExpanded(!expand)}
              className="p-2 md:hidden"
              style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
            >
              {expand ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {expand && (
          <ul
            className="p-4 pb-4 space-y-2 text-base rounded-lg md:hidden bg-dark-nav"
            style={{
              backgroundColor: isDarkMode
                ? "rgba(18, 18, 22, 0.95)"
                : "rgba(255, 255, 255, 0.95)",
            }}
          >
            <li>
              <Link
                to="/"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <AiOutlineHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <AiOutlineUser />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <AiOutlineFundProjectionScreen />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <CgFileDocument />
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 no-underline transition-colors duration-300 hover:text-purple-primary"
                style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
              >
                <AiOutlineMail />
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
