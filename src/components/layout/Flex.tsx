import styled, { css } from "styled-components";

interface IResponsiveRow {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  alignItems?: string;
  justifyContent?: string;
  columnGap?: string;
}

const ResponsiveRow = styled.div<IResponsiveRow>`
  position: relative;
  z-index: ${props => props.theme.zIndex.content};

  width: 100%;
  display: flex;
  column-gap: ${props => props.columnGap ?? 0};
  ${props =>
    props.theme.screens[props.breakpoint]
      ? css`
          flex-direction: column;
          align-items: ${props.alignItems ?? "center"};
        `
      : css`
          flex-direction: row;
          justify-content: ${props.justifyContent ?? "center"};
        `};
`;

interface IRow {
  wrap?: boolean;
}

const Row = styled.div<IRow>`
  display: flex;
  justify-content: space-between;
  flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ColumnCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export { ResponsiveRow, Row, Column, ColumnCenter, Center };
