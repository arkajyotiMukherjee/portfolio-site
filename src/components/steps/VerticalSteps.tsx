import React from "react";
import styled from "styled-components";

const StepProgress = styled.ul`
  position: relative;
  padding-left: 45px;
  list-style: none;

  /* Step rail */
  ::before {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: 0.81rem;
    /* subtracting the top*2 so that the line starts and ends right behind the circles */
    height: calc(100% - 0.5rem);
    border: 3px solid ${props => props.theme.colors.textHint};
    border-radius: 30px;
  }
`;

const StepItem = styled.li`
  position: relative;

  &:not(:last-child) {
    padding-bottom: 2rem;
  }

  /* Step indicator/circle */
  &::after {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: -2.313rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const VerticalSteps: React.FC = ({ children }) => {
  return (
    <StepProgress>
      {(children as React.ReactElement[])?.map(child => {
        return <StepItem>{child}</StepItem>;
      })}
    </StepProgress>
  );
};

export { VerticalSteps };
