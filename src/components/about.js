import React from "react";

const AboutHome = () => {
  return (
    <section className="flex items-center justify-center flex-col py-16 bg-gray-800 px-5 text-gray-200">
      <h3 className="uppercase text-gray-400 text-xl">About Me</h3>
      <h1 className="text-3xl text-center ">Building the Modern Web</h1>

      <p className="leading-relaxed mt-5 text-xl">
        <span>👋</span>Hello! I'm Lorenze, a software engineer based in Los Angeles, CA.
      </p>

      <p className="mt-5 text-xl">
        My passion revolves around combining creativity and technology. Web Development has allowed
        me to bring my creativity to the internet. I do this by designing and implementing
        applications and webstes for the entire world to see.
      </p>

      <p className="text-xl mt-5">
        Here are some of the technologies I've been working with recently:
      </p>

      <div className="flex mr-auto items-start space-x-1 mt-5">
        <ul className="ml-6 mr-10 text-xl list-disc">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Gatsby</li>
        </ul>
        <ul className="text-xl list-disc">
          <li>MongoDB</li>
          <li>PHP</li>
          <li>SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutHome;
