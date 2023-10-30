import React from "react";

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
      name: "Services",
    },
    {
      id: 4,
      name: "Contact ",
    },
  ];

  return (
    <div className="flex px-4  justify-between">
      <h1 className="text-white text-2xl">PortFolio</h1>
      <div className="flex flex-row items-center space-x-10 cursor-pointer  ">
        {navBar.map((navBar) => (
          <h1 className="text-white hover:bg-red-500 transition-all ease-in">{navBar.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default Nav;
