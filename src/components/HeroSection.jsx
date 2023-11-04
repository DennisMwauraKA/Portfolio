import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Socials from "./Socials";
function HeroSection() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="font-bold text-4xl sm:text-7xl text-white">
            I am a Full Stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have One year Experience building and designing Web applications
            and Mobile applications. Currently, I love to create mobile
            applications using technologies such as React native,MongoB,GraphQl
            and NestJs
          </p>
          <div className=" cursor-pointer bg-gradient-to-r from-blue-600 to to-blue-500 w-40 px-4 py-3 my-2 items-center  rounded-md  flex  flex-row">
            <button className=" group text-white text-xl ">Portfolio</button>
            <span className="group-hover:rotate-90">
              <AiFillCaretDown size={22} color="white" className="ml-1"/>
            </span>
          </div>
        </div>
      </div>
      {/*put picture here*/}
      <div></div>
      <Socials/>
    </div>
  );
}

export default HeroSection;
