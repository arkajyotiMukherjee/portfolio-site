import React from "react";
import styled from "styled-components";
import { constants } from "../../constants";
import logo from "../../images/svg/logo.svg";
import { bpMaxMD } from "../../styles/breakpoint";

interface ILogo {
  centered?: boolean;
}

const Wrapper = styled.div<ILogo>`
  img {
    width: 48px;
    margin: ${props => (props.centered ? "auto" : "0")};

    ${bpMaxMD} {
      width: 36px;
    }
  }
`;

const Logo: React.FC<ILogo> = ({ centered }) => {
  return (
    <Wrapper centered={centered}>
      <img src={logo} alt={constants.nav.logoAlt} />
    </Wrapper>
  );
};

export { Logo };
