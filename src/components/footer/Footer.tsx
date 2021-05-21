import React from "react";
import styled from "styled-components";
import { constants } from "../../constants";
import { Logo } from "../logo";
import { Body1 } from "../texts";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.highlight};
  padding: 2.5rem 0;
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Body1 variant="secondary" textAlign="center">
        {constants.footer.copyright}
      </Body1>
      <br />
      <Logo centered />
    </Wrapper>
  );
};

export { Footer };
