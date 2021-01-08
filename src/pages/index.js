import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import { graphql, useStaticQuery } from "gatsby";
import TextAndImage from "../components/textEdit";
import AboutHome from "../components/about";
import Works from "../components/works";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      profilePic: file(relativePath: { eq: "lorenze-portfile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 90) {
            src
          }
        }
      }
    }
  `);
  console.log(data.file.childImageSharp);
  return (
    <Layout>
      <main>
        <Hero
          image={data.file.childImageSharp.fluid}
          image2={data.profilePic.childImageSharp.fluid.src}
        />

        <div className="">
          <div className="hidden h-96 pt-5 lg:block flex pl-12 flex-col fixed bottom-0 gap-2 items-center ">
            <span className="transition duration-500 ease-in-out transform hover:mb-5 mb-5">
              <AiFillGithub size={32} className="cursor-pointer hover:text-green-400 mb-5" />
            </span>

            <span className="transition duration-500 ease-in-out transform hover:mb-5 mb-5">
              <AiFillTwitterCircle size={32} className="cursor-pointer hover:text-green-400 mb-5" />
            </span>

            <div className="bg-gray-200 h-3/4 mt-10 w-0.5 mx-auto"></div>
          </div>
          {/* <TextAndImage /> */}
          <AboutHome />
          <Works />
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;
