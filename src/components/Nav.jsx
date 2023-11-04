import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const navBar = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Portfolio",
    },
    {
      id: 4,
      name: "Experience ",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 fixed text-white bg-black px-4 ">
      <div>
        <h1 className="text-4xl font-signature">Dennis</h1>
      </div>

      <ul className=" hidden md:flex gap-6 ">
        {navBar.map((navBar) => (
          <li className="text-gray-400 list-none hover:scale-100 duration-200 cursor-pointer">
            {navBar.name}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setMenu(!menu)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {menu ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navBar.map((navBar) => (
            <li className="text-gray-400 list-none px-4 text-2xl py-6 cursor-pointer">
              {navBar.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Nav;
