import React from "react";

function About() {
  return (
    <div
      name={2}
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col  justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-2 border-gray-500">
            About
          </p>
          <p className="text-gray-500 text-xl py-4 max-w-md">
            My name is Dennis Mwaura, a Full stack Mobile and web developer with
            one year Experience building and designing Web applications and
            Mobile applications. Currently, I love to create and develop
           challenging Web applications and mobile applications that solve real world problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
