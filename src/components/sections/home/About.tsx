import { ParentSize } from "@visx/responsive";
import React, { useState } from "react";
import styled from "styled-components";
import { constants } from "../../../constants";
import { Chip } from "../../chip";
import { HierarchyGraph } from "../../graphs/hierarchyGraph";
import { Profile } from "../../image-fetch";
import { BoundedContainer, ResponsiveRow, Section } from "../../layout";
import { Anchor } from "../../link";
import { VerticalSteps } from "../../steps";
import { TabPane, Tabs } from "../../tabs";
import { Body1, Body2, Body3, SectionHeadText, SubHeading2 } from "../../texts";

const ProfileWrapper = styled(BoundedContainer).attrs({
  breakpoint: "lg",
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
        {constants.about.tabs.tab1.hobbiesHeading}
      </Body1>
      <br />
      {constants.about.tabs.tab1.hobbies.map(hobby => {
        return <Chip src={hobby.src} alt={hobby.name} label={hobby.name} />;
      })}
    </>
  );
};

const TabContent2: React.FC = () => {
  return (
    <ParentSize>
      {({ width }) => <HierarchyGraph width={width} height={width} />}
    </ParentSize>
  );
};

type ReadMore = {
  [index: string]: boolean;
};

const TabContent3: React.FC = () => {
  const [readMore, setReadMore] = useState<ReadMore>({});

  return (
    <>
      <VerticalSteps>
        {constants.about.tabs.tab3.jobs.map(
          ({
            id,
            designation,
            company,
            location,
            startDate,
            endDate,
            description,
          }) => {
            return (
              <div>
                <ResponsiveRow
                  breakpoint="lg"
                  justifyContent="space-between"
                  alignItems="left"
                >
                  <div>
                    <Body1>{designation}</Body1>
                    <Body2>{company}</Body2>
                  </div>
                  <div>
                    <Body2 variant="hint">
                      {startDate} - {endDate}
                    </Body2>
                    <Body2 variant="hint">{location}</Body2>
                  </div>
                </ResponsiveRow>
                <br />
                {description
                  .trim()
                  .slice(
                    0,
                    readMore[id]
                      ? description.length + 1
                      : constants.texts.maxCharacterLimit
                  )
                  .concat(!readMore[id] ? constants.texts.ellipses : "")
                  .split("*")
                  .map((desc, index) => {
                    return index !== 0 && <Body3>* {desc}</Body3>;
                  })}
                <Anchor
                  onClick={() => {
                    setReadMore({ ...readMore, [id]: !readMore[id] });
                  }}
                >
                  <Body3>
                    {readMore[id]
                      ? constants.texts.readLess
                      : constants.texts.readMore}
                  </Body3>
                </Anchor>
              </div>
            );
          }
        )}
      </VerticalSteps>
    </>
  );
};

const About: React.FC = () => {
  return (
    <Section id={constants.nav.about}>
      <SectionHeadText>{constants.about.heading}</SectionHeadText>

      <ResponsiveRow breakpoint="lg">
        <ProfileWrapper>
          <Profile />
          <SubHeading2>{constants.about.name}</SubHeading2>
          <Body1>{constants.about.designation}</Body1>
        </ProfileWrapper>

        <BoundedContainer breakpoint="lg" width="55%" margin="0 8% 0 0">
          <Tabs defaultActiveIndex={1} autoSwitch={false}>
            <TabPane label={constants.about.tabs.tab1.heading} index={1}>
              <TabContent1 />
            </TabPane>
            <TabPane label={constants.about.tabs.tab2.heading} index={2}>
              <TabContent2 />
            </TabPane>
            <TabPane label={constants.about.tabs.tab3.heading} index={3}>
              <TabContent3 />
            </TabPane>
          </Tabs>
        </BoundedContainer>
      </ResponsiveRow>
    </Section>
  );
};

export { About };
