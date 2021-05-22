import styled, { css } from "styled-components";
import { getBreakpoint } from "../../styles/breakpoint";

interface IResponsiveRow {
  breakpoint: "sm" | "md" | "lg" | "xl" | "xxl";
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
  flex-direction: row;
  justify-content: ${props => props.justifyContent ?? "center"};

  ${props =>
    css`
      ${getBreakpoint(props.breakpoint)} {
        flex-direction: column;
        align-items: ${props.alignItems ?? "center"};
      }
    `};
`;

interface IRow {
  wrap?: boolean;
  gap?: string;
}

const Row = styled.div<IRow>`
  display: flex;
  justify-content: space-between;
  flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
`;

const RowCentered = styled.div<IRow>`
  display: flex;
  justify-content: center;
  flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
  gap: ${props => props.gap ?? 0};
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

export { ResponsiveRow, Row, RowCentered, Column, ColumnCenter, Center };
