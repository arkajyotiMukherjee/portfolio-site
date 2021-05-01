import React from "react";
import { ArtDirectedBackground } from "../components/image-fetch/ArtDirectedBackground";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { About, Head, Projects } from "../components/sections/home";
import { SEO } from "../components/seo";

const App: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <ArtDirectedBackground>
        <Nav />
        <Head />
      </ArtDirectedBackground>
      <About />
      <Projects />
    </Layout>
  );
};

export default App;
