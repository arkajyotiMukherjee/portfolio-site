import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const BannerImage = styled(Img)`
  width: 60%;
  right: 0;
  top: ${props => (props.theme.screens.mmd ? "-2rem" : 0)};
`;

const Banner: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "pikachu-small.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      desktop: file(relativePath: { eq: "pikachu.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  const sources = [
    data.mobile.childImageSharp.fluid,
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 1050px)`,
    },
  ];
  return (
    <BannerImage
      fluid={sources}
      alt="banner image"
      style={{ position: "absolute" }}
    />
  );
};

export { Banner };
