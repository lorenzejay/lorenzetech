import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import { graphql, useStaticQuery } from "gatsby";
import TextAndImage from "../components/textEdit";
import AboutHome from "../components/about";
import Works from "../components/works";

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
          {/* <TextAndImage /> */}
          <AboutHome />
          <Works />
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;
