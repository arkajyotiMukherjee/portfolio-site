import React from "react";
import styled, { useTheme } from "styled-components";
import { constants } from "../../constants";
import logo from "../../images/svg/logo.svg";

interface ILogo {
  centered?: boolean;
  variant?: "large" | "small";
}

const Wrapper = styled.div<ILogo>`
  img {
    margin: ${props => (props.centered ? "auto" : "0")};
  }
`;

const Logo: React.FC<ILogo> = ({ centered, variant }) => {
  const { screens } = useTheme();

  function getVariant() {
    switch (variant) {
      case "large":
        return screens.md ? 64 : 84;
      case "small":
        return screens.md ? 48 : 64;
      default:
        return screens.md ? 64 : 84;
    }
  }

  return (
    <Wrapper centered={centered}>
      <img src={logo} width={getVariant()} alt={constants.nav.logoAlt} />
    </Wrapper>
  );
};

export { Logo };
