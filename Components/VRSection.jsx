import React from "react";

const VRSection = () => {
  return (
    <div className=" relative md:h-screen w-screen flex items-center justify-center flex-col px-6 pt-16">
      <div className="md:w-9/12 md:h-3/6  lg:top-10 top lg:left-24 lg:absolute overflow-hidden lg:overflow-visible">
        <img src="./image-interactive.jpg" />
      </div>
      <div className="md:w-6/12 md:h-3/6 lg:bottom-9 lg:right-28 bg-white lg:absolute flex flex-col items-center justify-center xl:px-28 pt-10 px-8">
        <h1 className="uppercase font-sans lg:text-5xl text-center font-extralight tracking-wide text-3xl">
          the leader in interactive vr
        </h1>
        <p className="mt-8 text-gray-600 text-center lg:text-left">
          Founded in 2011, Loopstudio has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-wining creatings have transformed businesses through digital
          experience that bind their brand.
        </p>
      </div>
    </div>
  );
};

export default VRSection;
