import styled from "styled-components";

interface IFullWidthGRContainer {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  flipped?: boolean;
  width?: string;
  maxWidth?: string;
}

const FullWidthGRContainer = styled.div.attrs<IFullWidthGRContainer>(props => ({
  flipped: props.flipped ?? false,
  width: props.width || "100vw",
  maxWidth: props.maxWidth || props.theme.maxWidth,
}))<IFullWidthGRContainer>`
  /* The height is proportionate to the width in the golden ratio */
  height: ${props =>
    props.theme.screens[props.breakpoint]
      ? `calc(min(${props.width}, ${props.maxWidth}) * 1.618 + 2px)`
      : `calc(min(${props.width}, ${props.maxWidth}) / 1.618 + 2px)`};

  display: grid;
  grid-template-columns: 61.8% 9.02% 5.58% 23.6%;
  grid-template-rows: ${props =>
    props.flipped ? "23.6% 5.58% 9.02% 61.8%" : "61.8% 9.02% 5.58% 23.6%"};
`;

export { FullWidthGRContainer };
