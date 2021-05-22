import { createGlobalStyle } from "styled-components";
import { bpMaxMD, bpMaxXL } from "./breakpoint";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${props => props.theme.fontSize.body3.xxl};
    ${bpMaxXL} {
      font-size: ${props => props.theme.fontSize.body3.xl};
    }
    ${bpMaxMD} {
      font-size: ${props => props.theme.fontSize.body3.md};
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textPrimary};
  }

  /* ScrollBar css */

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.textSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.highlight};
    border-radius: 3rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }

  /* Text Selection Colours */

  ::-moz-selection {
    color: ${props => props.theme.colors.textSecondary};
    background: ${props => props.theme.colors.secondary};
  }

  ::selection {
    color: ${props => props.theme.colors.textSecondary};
    background: ${props => props.theme.colors.secondary};
  }
`;

export { GlobalStyle };
