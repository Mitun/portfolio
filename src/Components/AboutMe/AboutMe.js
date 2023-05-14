import React from "react";
import "./AboutMe.css";

import { SiGooglescholar, SiGithub } from "react-icons/si";
import { FaLinkedin, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Button } from "react-bootstrap";

const AboutMe = () => {
  return (
    <div className="AboutMeContainer">
      <div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/mitun-shil-bb94aaab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://github.com/Mitun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub></SiGithub>
          </a>
          <a
            href="https://scholar.google.com/citations?user=_dhfqP4AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGooglescholar></SiGooglescholar>
          </a>
          <a
            href="https://www.instagram.com/mitun747/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://twitter.com/mitun_shil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare></FaTwitterSquare>
          </a>
        </div>
        <div>
          <span>
            <h1 className="h1Size">
              <TypeAnimation
                sequence={[
                  "I am a Software Developer",
                  1500,
                  "I am a Problem Solver",
                  2500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              ></TypeAnimation>
            </h1>
          </span>
        </div>
        <div>
          <span className="tagline">
            "Crafting exceptional web experiences that blend artistry and
            functionality"
          </span>
        </div>
        <div className="btnGroup">
          <button className="hireBtn">Hire Me</button>
          <a
            href={process.env.PUBLIC_URL + "/Resume_of_MitunShil.pdf"}
            download
          >
            <button className="resumeBtn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profilePicture">
        <div className="profilePictureBackground"></div>
      </div>
    </div>
  );
};

export default AboutMe;
