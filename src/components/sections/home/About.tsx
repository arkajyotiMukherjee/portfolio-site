import React from "react";
import styled, { useTheme } from "styled-components";
import { constants } from "../../../constants";
import { Profile } from "../../image-fetch/Profile";
import { BoundedContainer, Section } from "../../layout";
import { Body1, FadedHeading, SectionHeading, SubHeading } from "../../texts";

const FillerSpace = styled.div`
  height: 20rem;
`;

const Wrapper = styled(BoundedContainer).attrs({
  breakpoint: "md",
  width: "50%",
})`
  & > div {
    width: 50%;
  }

  & img {
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  & p {
    margin-bottom: 1rem;
  }
  & div + p {
    margin-top: 2rem;
  }
`;

const About: React.FC = () => {
  const { screens } = useTheme();

  return (
    <Section id={constants.nav.about}>
      {screens.xxxl ? (
        <SectionHeading>{constants.about.heading}</SectionHeading>
      ) : (
        <>
          <FadedHeading positionsTRBL={["0", "0", "0", "-3rem"]}>
            {constants.about.heading}
          </FadedHeading>
          <FillerSpace />
        </>
      )}
      <Wrapper>
        <Profile />
        <SubHeading>{constants.about.name}</SubHeading>
        <Body1>{constants.about.designation}</Body1>
      </Wrapper>
    </Section>
  );
};

export { About };
