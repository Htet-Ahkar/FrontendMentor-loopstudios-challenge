import React, { useState, useEffect } from "react";
import Link from "next/link";

//Constant
import { navBarComponents } from "../constant/index";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    setIsMenuActive(false);
  }, []);

  return (
    <nav
      className={`relative w-full h-28 p-10 md:px-32 px-8 flex justify-between align-middle ${
        isMenuActive && `bg-black`
      }`}
    >
      <h1 className="font-bold text-2xl text-white">loopstudios</h1>
      <div className="text-white space-x-7 text-sm md:flex items-center hidden">
        {navBarComponents.map((component) => (
          <Link key={component.title} href={component.url}>
            <a className="hover:border-b-2">{component.title}</a>
          </Link>
        ))}
      </div>
      <div
        onClick={menuToggle}
        className="md:hidden flex justify-center items-center cursor-pointer"
      >
        {isMenuActive ? (
          <img src="./icon-close.svg" />
        ) : (
          <img src="./icon-hamburger.svg" />
        )}
      </div>
      {isMenuActive && (
        <div
          onClick={() => {
            setIsMenuActive(false);
          }}
          className="text-white absolute cursor-pointer h-screen bg-black w-full left-0 top-28 flex flex-col space-y-6 text-3xl pt-20 pl-8 font-extralight uppercase font-sans"
        >
          {navBarComponents.map((component) => (
            <Link key={component.title} href={component.url}>
              <a>{component.title}</a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
