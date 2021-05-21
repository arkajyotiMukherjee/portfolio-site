import React from "react";
import styled, { css } from "styled-components";
import { constants } from "../../constants";
import { Logo } from "../logo";
import { Body1 } from "../texts";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.theme.screens.sm ? "auto" : "center")};
  padding: 2% 4%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  img {
    margin-top: ${props => (props.theme.screens.sm ? "1rem" : "0")};
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.theme.screens.sm ? "column" : "row")};
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  padding: ${props =>
    props.theme.screens.sm
      ? "0.5rem 0"
      : props.theme.screens.lg
      ? "0.5rem 2rem"
      : "0.5rem 3rem"};
  cursor: pointer;
  text-align: ${props => (props.theme.screens.sm ? "right" : "left")};
  ${props =>
    props.theme.screens.sm &&
    css`
      width: fit-content;
      align-self: flex-end;
    `};

  ::after {
    content: "";
    display: block;
    width: 50%;
    height: 2px;
    background: ${props => props.theme.colors.secondary};
    transition: width 200ms ease-in-out;
    ${props =>
      props.theme.screens.sm &&
      css`
        float: right;
      `}
  }
  :hover ::after {
    width: 100%;
  }
`;

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Logo />
      <Ul>
        <Li>
          <a href={`#${constants.nav.about}`}>
            <Body1>{constants.nav.about}</Body1>
          </a>
        </Li>
        <Li>
          <a href={`#${constants.nav.projects}`}>
            <Body1>{constants.nav.projects}</Body1>
          </a>
        </Li>
        <Li>
          <a href={`#${constants.nav.contact}`}>
            <Body1>{constants.nav.contact}</Body1>
          </a>
        </Li>
        <Li>
          <a
            href="https://medium.com/@arkajyoti31"
            target="_blank"
            rel="noopener"
          >
            <Body1>{constants.nav.blogs}</Body1>
          </a>
        </Li>
      </Ul>
    </NavContainer>
  );
};

export { Nav };
