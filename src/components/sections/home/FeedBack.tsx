import React from "react";
import styled from "styled-components";
import { Avatar } from "../../image-fetch/Avatar";
import { HandsomeSquidward } from "../../image-fetch/HandsomeSquidward";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionLight,
} from "../../layout";
import { Heading, Paragraph, PurpleText } from "../../texts";

interface IUserQuote {
  quote: string;
  name: string;
  designation: string;
}

const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const UserQuote: React.FC<IUserQuote> = ({ quote, name, designation }) => {
  return (
    <BoundedContainer breakpoint="md" width="50%" margin="0 0 0 2rem">
      <Center>
        <div>
          <Heading>See what our users are saying about us</Heading>
          <img
            src="/svg/apostrophe.svg"
            alt="quotes"
            style={{ margin: "2rem 0 1rem 0" }}
          />
          <Paragraph>{quote}</Paragraph>
          <br />
          <AvatarDiv>
            <Avatar />
            <div style={{ height: "fit-content" }}>
              <PurpleText
                fontSize="subHeading"
                fontWeight={600}
                underline={false}
              >
                {name}
              </PurpleText>
              <Paragraph>{designation}</Paragraph>
            </div>
          </AvatarDiv>
        </div>
      </Center>
    </BoundedContainer>
  );
};

const FeedBack: React.FC = () => {
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <HandsomeSquidward />
        </BoundedContainer>
        <UserQuote
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum. Aliquam tincidunt tristique risus in vestibulum. Donec quis egestas eros. Vestibulum ac diam nec libero sodales venenatis sed in sem."
          name="Man"
          designation="Lorem ipsum dolor sit amet"
        />
      </ResponsiveRow>
    </SectionLight>
  );
};

export { FeedBack };
