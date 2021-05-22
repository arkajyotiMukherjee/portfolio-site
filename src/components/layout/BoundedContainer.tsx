import styled, { css } from "styled-components";
import { getBreakpoint } from "../../styles/breakpoint";

interface IBoundedContainer {
  breakpoint: "sm" | "md" | "lg" | "xl" | "xxl";
  width: string;
  margin?: string;
  noMarginUponBreak?: boolean;
}

const BoundedContainer = styled.div<IBoundedContainer>`
  position: relative;
  z-index: ${props => props.theme.zIndex.content};
  width: ${props => props.width};
  margin: ${props => props.margin};

  ${props =>
    css`
      ${getBreakpoint(props.breakpoint)} {
        /* width is 100% - 16% (horizontal margin) = 84% */
        width: ${props.noMarginUponBreak ? "100%" : "84%"};
        margin: 1rem auto;
      }
    `};
`;

export { BoundedContainer };
