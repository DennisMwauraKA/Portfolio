import React, { useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import TypingEffects from "react-typing-writer-effect";
function HeroSection() {
  const resumeUrl =
    "https://docs.google.com/document/d/112y6RJl_nwOeTXNJGUm3pfOOf8RvKe_v/edit?usp=sharing&ouid=114972879594127975030&rtpof=true&sd=true";
  const githubUrl = " https://github.com/DennisMwauraKA";
  const linkedinUrl = "https://www.linkedin.com/in/dennis-mwaura-735161228/";

  return (
    <div
      name={1}
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center ml-5 h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <span className="font-bold text-4xl sm:text-7xl text-white">
            <h2 className="mb-4 ">Hey meet Dennis</h2>
            <h2 className="mb-4 "> A Full Stack Developer</h2>
          </span>
          <div className="flex flex-row gap-2 mt-5  ">
            <a href={githubUrl}>
              <FaGithub size={25} color="white" />
            </a>
            <a href={linkedinUrl}>
              <FaLinkedin size={25} color="white" />
            </a>
          </div>

          <div className=" cursor-pointer bg-gradient-to-r from-blue-600 to mt-3 to-blue-500 w-40 px-4 py-3 my-2 items-center  rounded-md  flex  flex-row">
            <a href={resumeUrl} download={"DENNIS MWAURA KARIUKI RESUME.docx"}>
              <button className=" text-white text-xl ">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
