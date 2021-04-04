import React, { useContext, useState } from "react";
import styled from "styled-components";
import { YamlContext } from "../../../context";
import { useTheme } from "../../../styles";
import { IconCircle } from "../../icon-circle";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";
import { Terminal } from "../../terminal";
import { Heading, Paragraph, PurpleText, SubText } from "../../texts";

const FadedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 0.625rem;
  margin-left: 2rem;
  background: ${props => props.theme.gradient.fadedLine(0)};
`;

const Wrapper = styled.div`
  width: ${props => (props.theme.screens.md ? "80vw" : "40vw")};
  padding-top: ${props => (props.theme.screens.md ? "2rem" : "1rem")};
  margin-left: -1.4rem;
`;

interface IStep {
  bullet: string;
  title: string;
  description: string;
  yamlLink?: string;
}

const Step: React.FC<IStep> = ({ bullet, title, description, yamlLink }) => {
  const { gradient, colors } = useTheme();
  const { setYamlLink } = useContext(YamlContext);

  const handleClick = (yamlLink: string) => {
    setYamlLink(yamlLink);
  };

  return (
    <div style={{ display: "flex" }}>
      <IconCircle
        bgColor={gradient.green}
        effectColor={colors.darkGreen}
        size={3.25}
      >
        <SubText textAlign="center" color="#fff" fontWeight="600">
          {bullet}
        </SubText>
      </IconCircle>
      <div style={{ padding: "0.5rem 0 0 2rem", maxWidth: "40rem" }}>
        <PurpleText
          fontSize="subHeading"
          fontWeight={600}
          underline={true}
          onClick={() => yamlLink && handleClick(yamlLink)}
        >
          {title}
        </PurpleText>
        <br />
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

const GetStartedSteps: React.FC = () => {
  return (
    <BoundedContainer breakpoint="md" width="50%" margin="0">
      <FadedDiv>
        <Wrapper>
          <Step
            bullet="1"
            title="Github"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum."
            yamlLink="https://github.com/arkajyotiMukherjee"
          />
          <Step
            bullet="2"
            title="Medium"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum."
            yamlLink="https://medium.com/@arkajyoti31"
          />
          <Step
            bullet="3"
            title="LinkedIn"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum."
            yamlLink="https://www.linkedin.com/in/arkajyotimukherjee/"
          />
        </Wrapper>
      </FadedDiv>
    </BoundedContainer>
  );
};

const GetStarted: React.FC = () => {
  const [yamlLink, setYamlLink] = useState(
    "https://github.com/arkajyotiMukherjee"
  );
  const initialValue = { yamlLink: yamlLink, setYamlLink: setYamlLink };

  return (
    <YamlContext.Provider value={initialValue}>
      <SectionDark>
        <div>
          <Heading textAlign="center">Get started</Heading>
          <ResponsiveRow breakpoint="md" alignItems="start">
            <BoundedContainer breakpoint="md" width="50%" margin="0">
              <Terminal />
            </BoundedContainer>
            <GetStartedSteps />
          </ResponsiveRow>
        </div>
      </SectionDark>
    </YamlContext.Provider>
  );
};

export { GetStarted };
