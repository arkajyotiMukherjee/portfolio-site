import React from "react";
import { HeroBackground } from "../components/image-fetch";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { About, Contact, Head, Projects } from "../components/sections/home";
import { SEO } from "../components/seo";

const App: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <HeroBackground>
        <Nav />
        <Head />
      </HeroBackground>
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
