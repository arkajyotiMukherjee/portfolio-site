import React from "react";
import styled, { useTheme } from "styled-components";
import { constants } from "../../../constants";
import { Chip } from "../../chip";
import { Profile } from "../../image-fetch/Profile";
import { BoundedContainer, ResponsiveRow, Section } from "../../layout";
import { TabPane, Tabs } from "../../tabs";
import { Body1, FadedHeading, SectionHeading, SubHeading } from "../../texts";

const FillerSpace = styled.div`
  height: 20rem;
`;

const ProfileWrapper = styled(BoundedContainer).attrs({
  breakpoint: "md",
  width: "45%",
  margin: "3% 0 0 8%",
})`
  & > div {
    width: 60%;
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

const TabContent1: React.FC = () => {
  return (
    <>
      <Body1>
        {constants.about.tabs.tab1.aboutMe}
        <br />
        <br />
        {constants.about.tabs.tab1.hobbies.heading}
      </Body1>
      <br />
      <Chip
        src={constants.about.tabs.tab1.hobbies.guitar.src}
        alt={constants.about.tabs.tab1.hobbies.guitar.name}
        label={constants.about.tabs.tab1.hobbies.guitar.name}
      />
      <Chip
        src={constants.about.tabs.tab1.hobbies.guitar.src}
        alt={constants.about.tabs.tab1.hobbies.guitar.name}
        label={constants.about.tabs.tab1.hobbies.guitar.name}
      />
    </>
  );
};

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
      <ResponsiveRow breakpoint="md">
        <ProfileWrapper>
          <Profile />
          <SubHeading>{constants.about.name}</SubHeading>
          <Body1>{constants.about.designation}</Body1>
        </ProfileWrapper>

        <BoundedContainer breakpoint="md" width="55%" margin="0 8% 0 0">
          <Tabs defaultActiveIndex={1}>
            <TabPane label={constants.about.tabs.tab1.heading} index={1}>
              <TabContent1 />
            </TabPane>
            <TabPane label={constants.about.tabs.tab2.heading} index={2}>
              Tab 2
            </TabPane>
            <TabPane label={constants.about.tabs.tab3.heading} index={3}>
              Tab 3
            </TabPane>
          </Tabs>
        </BoundedContainer>
      </ResponsiveRow>
    </Section>
  );
};

export { About };
