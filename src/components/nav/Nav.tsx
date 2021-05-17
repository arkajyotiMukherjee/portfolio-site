import React from "react";
import styled, { css, useTheme } from "styled-components";
import { constants } from "../../constants";
import logo from "../../images/svg/logo.svg";
import { Body1 } from "../texts";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
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
  padding: ${props => (props.theme.screens.sm ? "0.5rem 0" : "0.5rem 1.5rem")};
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
  const { screens } = useTheme();

  return (
    <NavContainer>
      <img
        src={logo}
        width={screens.md ? 64 : 84}
        alt={constants.nav.logoAlt}
      />
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
