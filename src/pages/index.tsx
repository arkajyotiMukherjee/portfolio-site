import React from "react";
import styled, { css } from "styled-components";
import { FullWidthGRContainer, Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { Head } from "../components/sections/home";
import { About } from "../components/sections/home/About";
import { SEO } from "../components/seo";

const Banner = styled(FullWidthGRContainer).attrs({
  flipped: true,
})`
  ${props =>
    props.theme.screens.md
      ? css`
          grid-template-areas:
            "N N N N"
            "H H H H"
            "H H H H"
            "H H H H";
          background: url("/assets/banner-md.png");
        `
      : css`
          grid-template-areas:
            "N N N N"
            "H . . ."
            "H . . ."
            "H . . .";
          background: url("/assets/banner.png");
        `};

  background-size: 100% auto;
  background-repeat: no-repeat;

  max-width: 120rem;
  margin: auto;
  margin-bottom: 3rem;
`;

const App: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Banner>
        <Nav />
        <Head />
      </Banner>
      <About />
    </Layout>
  );
};

export default App;
