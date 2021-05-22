import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import { constants, Project } from "../../../constants";
import close from "../../../images/svg/close.svg";
import { bpMaxLG, bpMaxMD, bpMaxSM } from "../../../styles/breakpoint";
import { Carousel } from "../../carousel";
import { Chip } from "../../chip";
import { getProjectCovers, getProjectImages } from "../../image-fetch";
import { BoundedContainer, ResponsiveRow, Section } from "../../layout";
import { ExternalLink } from "../../link";
import { WrappedList } from "../../list";
import {
  Body1,
  Body2,
  SectionHeadText,
  SubHeading1,
  SubHeading2,
} from "../../texts";

const ProjectsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  column-gap: 8%;
  row-gap: 5rem;
  width: 70%;
  margin: auto;

  ${bpMaxLG} {
    width: 90%;
  }

  ${bpMaxSM} {
    grid-template-columns: auto;
    row-gap: 3rem;
  }
`;

const ProjectExpanded = styled.div`
  grid-column: 1/3;
  width: 100vw;

  ${bpMaxSM} {
    grid-column: auto;
    width: 90vw;
  }
`;

const CloseButton = styled.div`
  margin: auto;

  img {
    width: 32px;
    margin: auto;
    margin-bottom: 2rem;
    cursor: pointer;

    :hover {
      transform: scale(1.5);
    }
  }

  ${bpMaxMD} {
    width: 24px;
  }

  ${bpMaxSM} {
    margin-bottom: 1rem;
  }
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
  padding: 1rem;
  margin-bottom: 1.5rem;

  ::before,
  ::after {
    content: "";
    position: absolute;
    border: 1px solid ${props => props.theme.colors.secondary};
  }
  ::before {
    top: 0.25rem;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
  }
  ::after {
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
  }

  :hover {
    cursor: pointer;
  }
`;

interface IExpandedImageContainer {
  isActive?: boolean;
  mobileImage?: boolean;
}

const ExpandedImageContainer = styled(ImageContainer)<IExpandedImageContainer>`
  width: auto;
  cursor: grab;
  margin: auto;
  transition: transform 300ms ease-in-out, filter 300ms ease-in-out;
  transform: scale(${props => (props.isActive ? 1 : 0.6)});

  :hover {
    cursor: grab;
  }

  :active {
    cursor: grabbing;
  }

  ${bpMaxSM} {
    width: ${props => props.mobileImage && "55%"};
  }
`;

const Hr = styled.hr`
  width: 20%;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 1rem;
  margin-top: 1rem;
`;

type Expanded = {
  [index: string]: boolean;
};

const Projects: React.FC = () => {
  const coverImages = getProjectCovers();
  const projectImages = getProjectImages();

  const [expanded, setExpanded] = useState<Expanded>({});

  return (
    <Section id={constants.nav.projects}>
      <SectionHeadText shiftRight>{constants.projects.heading}</SectionHeadText>
      <ProjectsContainer>
        {constants.projects.projectList.map((project: Project, index) => {
          const images = projectImages[project.projectID];
          return expanded[project.projectID] ? (
            <ProjectExpanded id={project.name}>
              <SubHeading1 textAlign="center">{project.name}</SubHeading1>
              {/* Close Button */}
              <CloseButton
                onClick={() => {
                  const id = project.projectID;
                  setExpanded({ ...expanded, [id]: !expanded[id] });
                }}
              >
                <img src={close} alt="close button" />
              </CloseButton>

              {/* Image Carousel */}
              <Carousel>
                {images
                  .sort((a, b) => {
                    const name1 = a.name;
                    const name2 = b.name;
                    return name1 < name2 ? -1 : 1;
                  })
                  .map(image => {
                    return (
                      <ExpandedImageContainer
                        mobileImage={image.name.includes("mobile")}
                      >
                        <GatsbyImage image={image.image} alt={image.name} />
                      </ExpandedImageContainer>
                    );
                  })}
              </Carousel>

              {/* Info section */}
              <br />
              <ResponsiveRow breakpoint="sm" columnGap="3rem">
                <BoundedContainer
                  breakpoint="sm"
                  width="40vw"
                  noMarginUponBreak
                >
                  {/* About the project */}
                  <Body1>{constants.projects.about}</Body1>
                  <Body2>{project.about}</Body2>
                  <br />
                  {/* Features of the project */}
                  <Body1>{constants.projects.features}</Body1>
                  {project.features
                    .trim()
                    .split("-")
                    .map((feature, index) => {
                      return index !== 0 && <Body2> - {feature}</Body2>;
                    })}
                </BoundedContainer>
                <BoundedContainer
                  breakpoint="sm"
                  width="30vw"
                  noMarginUponBreak
                >
                  {/* The tech used */}
                  <Body1>{constants.projects.techSpec}</Body1>
                  <WrappedList list={project.techSpec} noOfRows={4} />
                  <br />
                  {/* Links to the project */}
                  <Body1>{constants.projects.links}</Body1>
                  {project.links.map(link => {
                    return (
                      <ExternalLink to={link.url}>
                        <Body2>{link.name}</Body2>
                      </ExternalLink>
                    );
                  })}
                </BoundedContainer>
              </ResponsiveRow>
              <Hr />
            </ProjectExpanded>
          ) : (
            // Project covers/tiles
            <ProjectTile
              key={index}
              onClick={() => {
                const id = project.projectID;
                setExpanded({ ...expanded, [id]: !expanded[id] });
                navigate(`#${project.name}`);
              }}
            >
              <ImageContainer>
                <GatsbyImage
                  image={coverImages[project.projectID]}
                  alt={project.name}
                />
              </ImageContainer>
              <SubHeading2>{project.name}</SubHeading2>
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
