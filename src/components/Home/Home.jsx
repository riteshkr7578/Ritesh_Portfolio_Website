import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Experience from "../Experience";

function Home() {
  return (
    <section>
      <div className="home-section relative z-10 pt-5 pb-0">
        <Particle />
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-8"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div
              className="md:w-5/12 text-left pt-2"
              style={{ textAlign: "left", paddingRight: "2.5rem" }}
            >
              <h1 className="text-3xl md:text-5xl font-bold pb-1">
                Hi There!{" "}
                <span className="wave inline-block" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-3xl md:text-5xl font-black mt-2">
                I'M
                <strong className="text-purple-primary ml-2"> RITESH KUMAR</strong>
              </h1>

              <div className="py-10 text-lg font-light">
                <Type />
              </div>
            </div>

            <div className="md:w-5/12 pb-2.5 flex items-center justify-center">
              <div className="hero-logo-container">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="w-full max-h-96"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home2 />
      <Experience />

      <section className="find-me-section relative z-10 py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center py-7 md:py-7">
            <div className="w-full text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Me On</h1>
              <p className="text-base md:text-lg">
                Feel free to <span className="text-purple-primary font-semibold">connect</span> with me
              </p>
              <ul className="flex flex-wrap justify-center gap-4 mt-4 list-none p-0">
                <li className="social-icons">
                  <a
                    href="https://github.com/riteshkr7578"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <AiFillGithub size={24} />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://x.com/riteshc75786278"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <AiOutlineTwitter size={24} />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ritesh-kumar-732535221/"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/ritesh_chaurasiya11"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <AiFillInstagram size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
