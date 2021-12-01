import React, { useState, useEffect } from "react";
import Link from "next/link";

const CreationSection = () => {
  const [windowDimensions, setWindowDimensions] = useState();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    function getWindowDimensions() {
      const { innerWidth: width } = window;
      return {
        width,
      };
    }

    if (typeof windowDimensions === "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridComponents = [
    {
      title: "deep earth",
      desktopBG: "./desktop/image-deep-earth.jpg",
      mobileBG: "./mobile/image-deep-earth.jpg",
      url: "/",
    },
    {
      title: "night arcade",
      desktopBG: "./desktop/image-night-arcade.jpg",
      mobileBG: "./mobile/image-night-arcade.jpg",
      url: "/",
    },
    {
      title: "soccer team vr",
      desktopBG: "./desktop/image-soccer-team.jpg",
      mobileBG: "./mobile/image-soccer-team.jpg",
      url: "/",
    },
    {
      title: "the grid",
      desktopBG: "./desktop/image-grid.jpg",
      mobileBG: "./mobile/image-grid.jpg",
      url: "/",
    },
    {
      title: "from up above vr",
      desktopBG: "./desktop/image-from-above.jpg",
      mobileBG: "./mobile/image-from-above.jpg",
      url: "/",
    },
    {
      title: "pocket borealis",
      desktopBG: "./desktop/image-pocket-borealis.jpg",
      mobileBG: "./mobile/image-pocket-borealis.jpg",
      url: "/",
    },
    {
      title: "the curiosity",
      desktopBG: "./desktop/image-curiosity.jpg",
      mobileBG: "./mobile/image-curiosity.jpg",
      url: "/",
    },
    {
      title: "make it fisheye",
      desktopBG: "./desktop/image-fisheye.jpg",
      mobileBG: "./mobile/image-fisheye.jpg",
      url: "/",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-start items-center mt-4 lg:px-20 md:grid grid-cols-2">
      <h1 className="uppercase text-3xl font-sans font-extralight py-8 md:ml-10">
        our creations
      </h1>
      <div className="grid gap-5 grid-cols-1 w-full px-10 md:grid-cols-4 col-span-2">
        {gridComponents.map((component) => (
          <Link href={component.url} key={component.title}>
            <div
              //Start inline CSS
              style={{
                backgroundImage: `url(${
                  typeof windowDimensions !== "undefined" &&
                  windowDimensions.width < 768
                    ? component.mobileBG
                    : component.desktopBG
                })`,
              }}
              //End of inline CSS
              className="bg-no-repeat bg-cover h-24 relative cursor-pointer md:h-96"
            >
              <h1 className=" absolute uppercase text-white font-extralight font-sans text-xl w-6/12 bottom-0 left-0 px-6 py-4">
                {component.title}
              </h1>
              <div className="w-full h-full absolute hover:bg-gray-600 hover:opacity-70" />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center m-12 col-start-2 row-start-1 md:justify-end">
        <button className="uppercase font-light border-2 border-black w-32 h-10 tracking-widest hover:bg-black hover:text-white hover:border-0">
          see all
        </button>
      </div>
    </div>
  );
};

export default CreationSection;
