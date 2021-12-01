import React from "react";
import Link from "next/link";

//Constant
import { navBarComponents, socialMedias } from "../constant";

const Footer = () => {
  return (
    <div className="w-full text-white bg-black flex flex-col justify-center items-center py-2 md:flex-row md:justify-between md:px-24 md:mt-28">
      <div>
        <h1 className="lowercase text-2xl font-bold py-10 md:pb-5 ">
          loopstudios
        </h1>
        <div className="md:flex">
          {navBarComponents.map((component) => (
            <Link href={component.url} key={component.title}>
              <div className="flex items-start justify-center cursor-pointer">
                <span className="py-2 hover:border-b-2 md:pr-4 md:mb-10">
                  {component.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center py-5">
          {socialMedias.map((icon) => (
            <Link key={icon.name} href={icon.url}>
              <div className="px-2">
                <img src={icon.icon} />
              </div>
            </Link>
          ))}
        </div>
        <p className="text-gray-400 text-sm pb-5">
          © 2021 loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
