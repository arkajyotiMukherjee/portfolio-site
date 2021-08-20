import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { constants } from "../../constants";
import { bpMaxLG, bpMaxSM } from "../../styles/breakpoint";
import { Logo } from "../logo";
import { Body1 } from "../texts";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 4%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  ${bpMaxSM} {
    align-items: start;

    img {
      margin-top: 1rem;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;

  ${bpMaxSM} {
    flex-direction: column;
  }
`;

const Li = styled.li`
  padding: 0.5rem 3rem;
  cursor: pointer;

  ::after {
    content: "";
    display: block;
    width: 50%;
    height: 2px;
    background: ${props => props.theme.colors.secondary};
    transition: width 200ms ease-in-out;
  }

  :hover ::after {
    width: 100%;
  }

  ${bpMaxLG} {
    padding: 0.5rem 2rem;
  }

  ${bpMaxSM} {
    align-self: flex-end;
    padding: 0.5rem 0;

    ::after {
      float: right;
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Logo />
      <Ul>
        <Li>
          <Link to={`/#${constants.nav.about}`}>
            <Body1>{constants.nav.about}</Body1>
          </Link>
        </Li>
        <Li>
          <Link to={`/#${constants.nav.projects}`}>
            <Body1>{constants.nav.projects}</Body1>
          </Link>
        </Li>
        <Li>
          <Link to={`#${constants.nav.contact}`}>
            <Body1>{constants.nav.contact}</Body1>
          </Link>
        </Li>
        <Li>
          <Link to={`/${constants.nav.blogs}`}>
            <Body1>{constants.nav.blogs}</Body1>
          </Link>
        </Li>
      </Ul>
    </NavContainer>
  );
};

export { Nav };
