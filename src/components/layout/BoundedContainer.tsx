import styled from "styled-components";

interface IBoundedContainer {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  width: string;
}

const BoundedContainer = styled.div<IBoundedContainer>`
  /* width is 100% - 16% (horizontal margin) = 84% */
  width: ${props =>
    props.theme.screens[props.breakpoint] ? "84%" : props.width};
  margin: 2% 8%;
`;

export { BoundedContainer };
