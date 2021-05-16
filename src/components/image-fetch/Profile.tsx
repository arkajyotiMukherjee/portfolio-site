import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Profile: React.FC = () => {
  const data = useStaticQuery(graphql`{
  image: file(relativePath: {eq: "profile.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 700, quality: 100, layout: CONSTRAINED)
    }
  }
}
`);

  return (
    <GatsbyImage
      image={data.image.childImageSharp.gatsbyImageData}
      alt="picture of Arkajyoti Mukherjee" />
  );
};

export { Profile };
