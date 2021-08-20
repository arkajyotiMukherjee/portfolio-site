import { graphql } from "gatsby";
import React from "react";
import { IPageQuery } from "../@types/blogs";
import { Footer } from "../components/footer";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { SEO } from "../components/seo";
import { Contact, Head } from "../sections/home";
import { Dump } from "../utils/dump";

const Blogs: React.FC<IPageQuery> = ({ data }) => {
  return (
    <Layout>
      {/* Modify SEO later */}
      <SEO />
      <Nav />
      <Head />
      <Dump data={data} />
      {data.allMdx.nodes.map(node => {
        return <p>{node.frontmatter.title}</p>;
      })}
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Blogs;

export const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          date
          title
          description
          keywords
          banner
        }
        fields {
          slug
        }
      }
    }
  }
`;
