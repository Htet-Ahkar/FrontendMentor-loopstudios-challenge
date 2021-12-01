import React from "react";
import { Navbar } from "./";

const Header = () => {
  return (
    <div
      className="bg-cover sm:bg-center bg-no-repeat bg-top"
      style={{
        backgroundImage: `url(./image-hero.jpg)`,
        height: "600px",
      }}
    >
      <div className="w-full h-full bg-red-700 bg-opacity-10">
        <Navbar />
        <div className="md:px-32 px-8 text-white">
          <div className="border-white border-2 xl:w-8/12 w-full mt-12">
            <h1 className="uppercase lg:text-8xl text-5xl font font-sans font-extralight md:p-8 p-5">
              Immersive experiences that deliver
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
