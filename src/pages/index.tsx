import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { GetStarted, Head } from "../components/sections/home";
import { SEO } from "../components/seo";

const Banner = styled.div`
  height: ${props =>
    props.theme.screens.md ? "calc(100vw * 1.618)" : "calc(100vw / 1.618)"};
  background: ${props =>
    props.theme.screens.md
      ? `url("/assets/banner-md.png")`
      : `url("/assets/banner.png")`};
  background-size: 100% auto;
  background-repeat: no-repeat;
  margin-bottom: 3rem;
`;

const App = () => {
  return (
    <Layout>
      <SEO />
      <Banner>
        <Nav />
        <Head />
      </Banner>
      <GetStarted />
    </Layout>
  );
};

export default App;
