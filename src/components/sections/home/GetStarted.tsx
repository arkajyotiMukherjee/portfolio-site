import React from "react";
import styled from "styled-components";
import { Body1, Body2 } from "../../texts";

const IconCircle = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  background: ${props => props.theme.colors.secondary};
  border-radius: 50%;
`;

const FadedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 0.625rem;
  margin-left: 2rem;
  background: ${props => props.theme.colors.textHint};
`;

const Wrapper = styled.div`
  width: 80vw;
  padding-top: ${props => (props.theme.screens.md ? "2rem" : "1rem")};
  margin-left: -1.4rem;
`;

interface IStep {
  title: string;
  description: string;
}

const Step: React.FC<IStep> = ({ title, description }) => {
  return (
    <div style={{ display: "flex" }}>
      <IconCircle />
      <div style={{ padding: "0.5rem 0 0 2rem", maxWidth: "40rem" }}>
        <Body1>{title}</Body1>
        <br />
        <Body2>{description}</Body2>
      </div>
    </div>
  );
};

const GetStartedSteps: React.FC = () => {
  return (
    <FadedDiv>
      <Wrapper>
        <Step
          title="Github"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum."
        />
        <Step
          title="Medium"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum."
        />
        <Step
          title="LinkedIn"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum."
        />
      </Wrapper>
    </FadedDiv>
  );
};

const GetStarted: React.FC = () => {
  return (
    <div>
      <GetStartedSteps />
    </div>
  );
};

export { GetStarted };
