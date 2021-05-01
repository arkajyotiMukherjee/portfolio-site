import React from "react";
import { Banner } from "../components/image-fetch/Banner";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { About, Head, Projects } from "../components/sections/home";
import { SEO } from "../components/seo";

const App: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Banner>
        <Nav />
        <Head />
      </Banner>
      <About />
      <Projects />
    </Layout>
  );
};

export default App;
