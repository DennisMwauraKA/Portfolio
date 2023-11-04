import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">About</p>
          <p className="mt-10">
            I started my journey in software development one year ago I really
            love what I do, as this keeps me on my feet designing and helping
            clients
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
