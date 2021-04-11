import React from "react";
import styled, { css } from "styled-components";
import { Body1 } from "../texts";

const NavContainer = styled.nav`
  grid-area: N;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${props => (props.theme.screens.lg ? "2rem" : "3.5rem 5rem")};
  max-width: 120rem;
  margin: 0 auto;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.theme.screens.md ? "column" : "row")};
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  padding: ${props =>
    props.theme.screens.md
      ? "0.5rem 0"
      : props.theme.screens.xxl
      ? "0.5rem 1.5rem"
      : "0.5rem 2.5rem"};
  cursor: pointer;
  text-align: ${props => (props.theme.screens.md ? "right" : "left")};
  ${props =>
    props.theme.screens.md &&
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
      props.theme.screens.md &&
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
      <div>
        <img src="/assets/rain-doge.svg" width="64" alt="logo" />
      </div>
      <Ul>
        <Li>
          <a href="#about">
            <Body1>about</Body1>
          </a>
        </Li>
        <Li>
          <a href="#projects">
            <Body1>projects</Body1>
          </a>
        </Li>
        <Li>
          <a href="#contact">
            <Body1>contact</Body1>
          </a>
        </Li>
        <Li>
          <a href="#blogs">
            <Body1>blogs</Body1>
          </a>
        </Li>
      </Ul>
    </NavContainer>
  );
};

export { Nav };
