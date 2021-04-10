import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { GlobalStyle } from "../../styles/global-styles";
import { CSSDebugger } from "../css-debugger";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <CSSDebugger />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export { Layout };
