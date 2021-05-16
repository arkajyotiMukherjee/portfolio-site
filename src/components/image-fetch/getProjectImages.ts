import { graphql, useStaticQuery } from "gatsby";

type ProjectImages = {
  [index: string]: any[];
};

const getProjectImages = () => {
  const data = useStaticQuery(graphql`{
  images: allFile(filter: {relativePath: {regex: "/projects/"}}) {
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

  const projectImages: ProjectImages = data.images.edges.reduce(
    (acc: ProjectImages, edge: any) => {
      const key: string = edge.node.relativeDirectory.split("/")[1];
      return {
        ...acc,
        [key]: [...(acc[key] ?? []), edge.node.childImageSharp.gatsbyImageData],
      };
    },
    {}
  );

  return projectImages;
};

export { getProjectImages };
