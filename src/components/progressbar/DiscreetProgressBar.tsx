import React from "react";
import styled, { css } from "styled-components";

interface IDiscreetProgressBar {
  currentStep: number;
  totalSteps: number;
  delay?: number;
  leftShift?: number;
}

const ProgressRail = styled.div`
  height: 6px;
  background-color: ${props => props.theme.colors.textHint};
  border-radius: 1rem;
  margin-bottom: 2rem;
`;
const Progress = styled(ProgressRail).attrs<IDiscreetProgressBar>(props => ({
  delay: props.delay ?? 2,
  leftShift: props.leftShift ?? 0,
}))<IDiscreetProgressBar>`
  /* Overridden properties */
  background-color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 0;

  ${({ currentStep, totalSteps, leftShift }) => css<IDiscreetProgressBar>`
    width: calc(100% / ${totalSteps} * ${currentStep} - ${leftShift}%);
  `};
  transition: width ${props => props.delay}s ease-in-out;
`;

const DiscreetProgressBar: React.FC<IDiscreetProgressBar> = props => {
  return (
    <ProgressRail>
      <Progress {...props} />
    </ProgressRail>
  );
};

export { DiscreetProgressBar };
