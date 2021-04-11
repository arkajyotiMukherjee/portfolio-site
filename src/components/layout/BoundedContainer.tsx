import styled from "styled-components";

interface IBoundedContainer {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  width: string;
  margin?: string;
}

const BoundedContainer = styled.div<IBoundedContainer>`
  width: ${props =>
    props.theme.screens[props.breakpoint] ? "100%" : props.width};
  margin: ${props =>
    props.theme.screens[props.breakpoint] ? "1rem" : props.margin ?? "0 3rem"};
`;

export { BoundedContainer };
