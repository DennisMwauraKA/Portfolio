import React from "react";
import css from "../assets/galleryicon/css.png";
import git from "../assets/galleryicon/git.png";
import graphql from "../assets/galleryicon/graphql.png";
import html from "../assets/galleryicon/html.png";
import javascript from "../assets/galleryicon/javascript.jpeg";
import mongo from "../assets/galleryicon/mongo.png";
import nodejs from "../assets/galleryicon/nodejs.png";
import php from "../assets/galleryicon/php.png";
import react from "../assets/galleryicon/react.png";
import tailwind from "../assets/galleryicon/tailwind.png"
import bootstrap from "../assets/galleryicon/bootstrap.png"
import postgre from "../assets/galleryicon/postgre.png"
function Experience() {
  const icon = [
    { id: 1, name: "CSS", src: css, style: "shadow-red-400" },
    { id: 2, name: "git", src: git, style: "shadow-blue-500" },
    { id: 3, name: "graphql", src: graphql, style: "shadow-blue-500" },
    { id: 4, name: "html", src: html, style: "shadow-blue-500" },
    { id: 5, name: "javaScript", src: javascript, style: "shadow-blue-500" },
    { id: 6, name: "mongo DB", src: mongo, style: "shadow-blue-500" },
    { id: 7, name: "nodejs", src: nodejs, style: "shadow-blue-500" },
    { id: 8, name: "php", src: php, style: "shadow-blue-500" },
    { id: 9, name: "react native", src: react, style: "shadow-blue-500" },
    { id: 10, name: "tailwind", src: tailwind, style: "shadow-blue-500" },
    { id: 11, name: "bootstrap", src: bootstrap, style: "shadow-blue-500" },
    { id: 12, name: "postgreSql", src: postgre, style: "shadow-blue-500" },
  ];
  return (
    <div
      name={4}
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col  justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl capitalize font-bold inline border-b-2 border-gray-500">
            tech stacks
          </p>
          <p className="text-gray-500 text-xl py-4 max-w-md">
            Here are some of the Technologies that I have worked with
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {icon.map((tech) => (
              <div
                className={`shadow-xl rounded-lg ${tech.style}`}
              >
                <img
                  src={tech.src}
                  alt="my tech stacks"
                  className="w-20 mx-auto"
                />
                <p className="capitalize text-gray-500">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
