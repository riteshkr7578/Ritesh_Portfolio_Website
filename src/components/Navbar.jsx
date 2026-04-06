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
          ? "bg-dark-nav dark:bg-dark-nav shadow-lg backdrop-blur-md"
          : "bg-transparent"
      } ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center font-bold text-xl tracking-wide hover:bg-dark-card px-3 py-2 rounded-lg transition-all duration-300"
            style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
          >
            RK<span className="text-purple-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <AiOutlineHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <AiOutlineUser />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="flex items-center gap-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <AiOutlineFundProjectionScreen />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="flex items-center gap-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <CgFileDocument />
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <AiOutlineMail />
                Contact
              </Link>
            </li>

            {/* Theme Toggle Button */}
            <li className="ml-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center"
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
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-transform duration-300"
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
              className="md:hidden p-2"
              style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
            >
              {expand ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {expand && (
          <ul
            className="md:hidden pb-4 space-y-2 bg-dark-nav rounded-lg p-4"
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
                className="flex items-center gap-2 py-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <AiOutlineHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <AiOutlineUser />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <AiOutlineFundProjectionScreen />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
              >
                <CgFileDocument />
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => updateExpanded(false)}
                className="flex items-center gap-2 py-2 hover:text-purple-primary transition-colors duration-300"
                style={{ color: isDarkMode ? "#ffffff" : "#1a1a1c" }}
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
