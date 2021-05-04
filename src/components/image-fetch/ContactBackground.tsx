import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import styled, { css } from "styled-components";
import { FullWidthGRContainer } from "../layout";

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
`;

const InnerWrapper = styled(FullWidthGRContainer).attrs({
  breakpoint: "sm",
})`
  ${props =>
    props.theme.screens.sm
      ? css`
          grid-template-areas:
            "C C C C"
            ". . . ."
            ". . . ."
            ". . . .";
        `
      : css`
          grid-template-areas:
            "C . . ."
            "C . . ."
            "C . . ."
            "C . . .";
        `};

  margin: auto;
`;

const ContactBackground: React.FC = ({ children }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "contact-background-sm.png" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        desktopImage: file(relativePath: { eq: "contact-background.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    `
  );
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 640px)`,
    },
  ];

  return (
    <Wrapper>
      <BackgroundImage
        fluid={sources}
        alt="banner image of golden ratio and david"
      >
        <InnerWrapper>{children}</InnerWrapper>
      </BackgroundImage>
    </Wrapper>
  );
};

export { ContactBackground };
