import { graphql, useStaticQuery } from "gatsby";

type ProjectImages = {
  [index: string]: any[];
};

const getProjectImages = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativePath: { regex: "/projects/" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  `);

  const projectImages: ProjectImages = data.images.edges.reduce(
    (acc: ProjectImages, edge: any) => {
      const key: string = edge.node.relativeDirectory.split("/")[1];
      return {
        ...acc,
        [key]: [...(acc[key] ?? []), edge.node.childImageSharp.fluid],
      };
    },
    {}
  );

  return projectImages;
};

export { getProjectImages };
