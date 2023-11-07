import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function Nav() {
  const navbar = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
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
    <div className="flex justify-between items-center w-full h-14 fixed text-white bg-black px-4 ">
      <div>
        <h1 className="text-4xl font-signature">Dennis</h1>
      </div>

      <ul className="  hidden md:flex gap-6 ">
        {navbar.map((navbar) => (
          <li
            key={navbar.id}
            className="text-gray-400 list-none hover:scale-100 duration-200 cursor-pointer"
          >
            <Link to={navbar.id} smooth duration={500}>
              {navbar.name}
            </Link>
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
        <ul className="flex flex-col justify-center items-center absolute top-14 md:hidden w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navbar.map((navbar) => (
            <li
              key={navbar.id}
              className="text-gray-400 list-none px-4 text-2xl py-6 cursor-pointer"
            >
              <Link
                onClick={() => setMenu(!menu)}
                to={navbar.id}
                smooth
                duration={500}
              >
                {navbar.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Nav;
