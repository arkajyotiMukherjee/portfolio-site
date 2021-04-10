import React from "react";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { GetStarted, Head } from "../components/sections/home";
import { SEO } from "../components/seo";

const App = () => {
  return (
    <Layout>
      <SEO />
      <Nav />
      <Head />
      <GetStarted />
    </Layout>
  );
};

export default App;
