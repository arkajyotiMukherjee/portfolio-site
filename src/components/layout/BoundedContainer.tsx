import styled from "styled-components";

interface IBoundedContainer {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  width: string;
  margin?: string;
  noMarginUponBreak?: boolean;
}

const BoundedContainer = styled.div<IBoundedContainer>`
  position: relative;
  z-index: ${props => props.theme.zIndex.content};

  /* width is 100% - 16% (horizontal margin) = 84% */
  width: ${props =>
    props.theme.screens[props.breakpoint]
      ? props.noMarginUponBreak
        ? "100%"
        : "84%"
      : props.width};
  margin: ${props =>
    props.theme.screens[props.breakpoint] ? "1rem auto" : props.margin};
`;

export { BoundedContainer };
