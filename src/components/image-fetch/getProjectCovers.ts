import { graphql, useStaticQuery } from "gatsby";

type CoverImages = {
  [index: string]: any;
};

const getProjectCovers = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativePath: { regex: "/cover/" } }) {
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

  const coverImages: CoverImages = data.images.edges.reduce(
    (acc: CoverImages, edge: any) => {
      const key: string = edge.node.relativeDirectory.split("/")[1];
      return {
        ...acc,
        [key]: edge.node.childImageSharp.fluid,
      };
    },
    {}
  );

  return coverImages;
};

export { getProjectCovers };
