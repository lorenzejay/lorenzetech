import React from "react";
import BackgroundImage from "gatsby-background-image";

function Hero({ image, image2 }) {
  return (
    <BackgroundImage
      className="h-full "
      Tag="section"
      fluid={image}
      backgroundColor={`#040e18`}
      objectFit="cover"
    >
      <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>

      <div className="container relative mx-auto px-4 py-8 lg:p-12">
        <div className="w-auto justify-around lg:items-center flex flex-wrap flex-column md:flex flex-row sm:items-start">
          <div className="lg:w-1/2">
            <h1 className="text-white font-semibold text-6xl">Full Stack Web Developer</h1>
            <p className="mt-4 text-lg text-gray-300">
              Full Stack Web Developer based in Los Angeles, California.
            </p>
            <button className="px-5 py-1 bg-gray-700 my-3 rounded-sm text-md uppercase text-white">
              Resume
            </button>
          </div>

          <img
            className="rounded-full h-44 w-44 my-5 lg:h-96 lg:w-96 object-cover"
            src={image2}
            alt="You missing out on how I look."
          />
        </div>
      </div>
    </BackgroundImage>
  );
}

export default Hero;
