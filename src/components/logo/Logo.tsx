import React from "react";
import styled, { useTheme } from "styled-components";
import { constants } from "../../constants";
import logo from "../../images/svg/logo.svg";

interface ILogo {
  centered?: boolean;
}

const Wrapper = styled.div<ILogo>`
  img {
    margin: ${props => (props.centered ? "auto" : "0")};
  }
`;

const Logo: React.FC<ILogo> = ({ centered }) => {
  const { screens } = useTheme();

  return (
    <Wrapper centered={centered}>
      <img
        src={logo}
        width={screens.md ? 36 : 48}
        alt={constants.nav.logoAlt}
      />
    </Wrapper>
  );
};

export { Logo };
