import React from "react";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { About, Contact, Head, Projects } from "../components/sections/home";
import { SEO } from "../components/seo";

const App: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Nav />
      <Head />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
