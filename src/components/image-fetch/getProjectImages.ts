import { graphql, useStaticQuery } from "gatsby";

type ProjectImages = {
  [index: string]: any[];
};

const getProjectImages = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { regex: "/projects/" } }) {
        edges {
          node {
            relativeDirectory
            name
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 510)
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
        [key]: [
          ...(acc[key] ?? []),
          {
            name: edge.node.name,
            image: edge.node.childImageSharp.gatsbyImageData,
          },
        ],
      };
    },
    {}
  );

  return projectImages;
};

export { getProjectImages };
