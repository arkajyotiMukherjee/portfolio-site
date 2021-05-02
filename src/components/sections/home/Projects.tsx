import Img from "gatsby-image";
import React, { useState } from "react";
import styled from "styled-components";
import { constants, Project } from "../../../constants";
import { Carousel } from "../../carousel";
import { Chip } from "../../chip";
import { getProjectCovers } from "../../image-fetch/getProjectCovers";
import { getProjectImages } from "../../image-fetch/getProjectImages";
import { Section } from "../../layout";
import { Body2, SectionHeadText, SubHeading } from "../../texts";

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.theme.screens.md ? "auto" : "1fr 1fr"};
  grid-template-rows: auto;
  justify-items: center;
  column-gap: 8%;
  row-gap: ${props => (props.theme.screens.md ? "3rem" : "5rem")};
  margin: 0 15%;
`;

const ProjectTile = styled.div`
  width: 100%;

  p:nth-child(2) {
    margin-bottom: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  padding: 0.4rem;
  margin-bottom: 1.5rem;

  ::before,
  ::after {
    content: "";
    position: absolute;
    border: 1px solid ${props => props.theme.colors.secondary};
  }
  ::before {
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
  }
  ::after {
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
  }

  .gatsby-image-wrapper {
    height: ${props => (props.theme.screens.md ? "8rem" : "auto")};
    filter: grayscale(100%);
  }

  :hover {
    cursor: pointer;

    .gatsby-image-wrapper {
      filter: grayscale(30%);
    }
  }
`;

interface IExpandedImageContainer {
  aspectRatio: number;
}

const ExpandedImageContainer = styled(ImageContainer)<IExpandedImageContainer>`
  width: calc(${props => props.aspectRatio} * 280px);

  .gatsby-image-wrapper {
    height: 280px;
    filter: grayscale(0%);
  }

  :hover {
    cursor: inherit;

    .gatsby-image-wrapper {
      filter: grayscale(0%);
    }
  }
  :active {
    cursor: inherit;
  }
`;

const ProjectCarousel = styled.div`
  position: relative;
  grid-column: 1/3;
  width: 100vw;

  cursor: grab;

  :active {
    cursor: grabbing;
  }
`;

type Expanded = {
  [index: string]: boolean;
};

const Projects: React.FC = () => {
  const coverImages = getProjectCovers();
  const projectImages = getProjectImages();

  const [expanded, setExpanded] = useState<Expanded>({});

  return (
    <Section>
      <SectionHeadText shiftRight>{constants.projects.heading}</SectionHeadText>
      <ProjectsContainer>
        {constants.projects.projects.map((project: Project, index) => {
          const images = projectImages[project.projectID];
          return expanded[project.projectID] ? (
            <ProjectCarousel>
              <Carousel>
                {images.map(image => {
                  return (
                    <ExpandedImageContainer aspectRatio={image.aspectRatio}>
                      <Img alt={project.name} fluid={image} />
                    </ExpandedImageContainer>
                  );
                })}
              </Carousel>
            </ProjectCarousel>
          ) : (
            <ProjectTile
              key={index}
              onClick={() => {
                const id = project.projectID;
                setExpanded({ ...expanded, [id]: !expanded[id] });
              }}
            >
              <ImageContainer>
                <Img
                  alt={project.name}
                  fluid={coverImages[project.projectID]}
                />
              </ImageContainer>
              <SubHeading>{project.name}</SubHeading>
              {project.tags.map(tag => {
                return <Chip label={tag} />;
              })}
              <Body2>{project.description}</Body2>
            </ProjectTile>
          );
        })}
      </ProjectsContainer>
    </Section>
  );
};

export { Projects };
