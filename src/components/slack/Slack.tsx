import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Paragraph, SubHeading } from "../texts";

const SlackBox = styled.div`
  background: white;
  width: ${props => (props.theme.screens.md ? "100%" : "30rem")};
  height: 100%;
  padding: ${props =>
    props.theme.screens.md ? "2.5rem 1.5rem" : "3.75rem 2.813rem"};
  text-align: center;
  box-shadow: 0px 14px 54px rgba(0, 0, 0, 0.1);
`;

const Slack: React.FC = () => {
  return (
    <SlackBox>
      <img
        style={{ width: "50%", margin: "0 auto" }}
        src="/svg/slackWithLabel.svg"
        alt="Slack Logo"
      />
      <br />
      <SubHeading textAlign="center" style={{ margin: "1rem 0" }}>
        Lorem ipsum dolor sit amet
      </SubHeading>
      <Paragraph textAlign="center">Lorem ipsum dolor sit amet</Paragraph>
      <br />

      <a rel="noopener noreferrer" target="_blank" href="https://slack.com/">
        <Button style={{ width: "80%" }} gradientColor="purple">
          Lorem ipsum dolor sit amet
        </Button>
      </a>
    </SlackBox>
  );
};

export { Slack };
