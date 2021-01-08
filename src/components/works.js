import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import { AiFillGithub, AiOutlineLaptop } from "react-icons/ai";

const Works = () => {
  const data = useStaticQuery(graphql`
    query Works {
      allProjectsJson {
        nodes {
          title
          description
          technologies
          github
          demo
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <section className="h-auto py-5 px-5 bg-gray-800 text-white lg:px-44 ">
      <h1 className="text-3xl text-center lg:text-left">Some Things I've Built</h1>
      <div className="flex items-center justify-center flex-col">
        {data.allProjectsJson.nodes.map((item, i) => {
          console.log(item);
          return (
            <BackgroundImage
              key={i}
              style={{ width: "100%" }}
              className="h-60 flex items-center justify-center my-6 lg:h-96 "
              backgroundColor={`#040e18`}
              objectFit="cover"
              fluid={item.image.childImageSharp.fluid}
            >
              {/* <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-25 hover:opacity-75 bg-gray-800  "
              ></span> */}
              <div className="hover:block w-full h-full opacity-80 bg-black  h-64 w-full flex items-start pl-5 justify-center bg-transparent flex-col z-10 lg:justify-end lg:pb-5">
                <div className="mr-auto mb-5 text-indigo-700 text-pink-600">
                  <h6 className="mr-auto text-xl">Featured Project</h6>

                  <h1 className="text-white text-2xl">{item.title}</h1>
                </div>
                <p className="text-white text-sm w-3/4">{item.description}</p>
                <ul className="flex gap-5 mt-5">
                  {item.technologies.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="flex gap-2 mt-1">
                  <li>
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a href={item.demo} target="_blank" rel="noreferrer">
                      <AiOutlineLaptop />
                    </a>
                  </li>
                </ul>
              </div>
            </BackgroundImage>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
