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
      <div className="relative z-10 pt-5 pb-0 home-section">
        <Particle />
        <div className="px-4 mx-auto max-w-7xl">
          <div
            className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-8"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div
              className="pt-2 text-left md:w-5/12"
              style={{ textAlign: "left", paddingRight: "2.5rem" }}
            >
              <h1 className="pb-1 text-3xl font-bold md:text-5xl">
                Hi There!{" "}
                <span className="inline-block wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="mt-2 text-3xl font-black md:text-5xl">
                I'M
                <strong className="ml-2 text-purple-primary"> RITESH KUMAR</strong>
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

      <section className="relative z-10 py-5 find-me-section md:py-10">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center py-7 md:py-7">
            <div className="w-full text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">Find Me On</h1>
              <p className="text-base md:text-lg">
                Feel free to <span className="font-semibold text-purple-primary">connect</span> with me
              </p>
              <ul className="flex flex-wrap justify-center gap-4 p-0 mt-4 list-none">
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
                    href="https://www.linkedin.com/in/riteshkr7578/"
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
