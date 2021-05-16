import { graphql, useStaticQuery } from "gatsby";

type CoverImages = {
  [index: string]: any;
};

const getProjectCovers = () => {
  const data = useStaticQuery(graphql`{
  images: allFile(filter: {relativePath: {regex: "/cover/"}}) {
    edges {
      node {
        relativeDirectory
        childImageSharp {
          gatsbyImageData(width: 1000, quality: 100, layout: CONSTRAINED)
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
        [key]: edge.node.childImageSharp.gatsbyImageData,
      };
    },
    {}
  );

  return coverImages;
};

export { getProjectCovers };
