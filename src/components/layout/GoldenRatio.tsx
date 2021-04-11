import styled from "styled-components";

const FullWidthGRContainer = styled.div.attrs({
  flipped: false,
  width: "100vw",
  maxWidth: "120rem",
})`
  /* The height is proportionate to the width in the golden ratio */
  height: ${props =>
    props.theme.screens.md
      ? `calc(min(${props.width}, ${props.maxWidth}) * 1.618 + 2px)`
      : `calc(min(${props.width}, ${props.maxWidth}) / 1.618 + 2px)`};

  display: grid;
  grid-template-columns: 61.8% 9.02% 5.58% 23.6%;
  grid-template-rows: ${props =>
    props.flipped ? "23.6% 5.58% 9.02% 61.8%" : "61.8% 9.02% 5.58% 23.6%"};
`;

export { FullWidthGRContainer };
