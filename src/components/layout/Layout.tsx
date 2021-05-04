import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { GlobalStyle } from "../../styles/global-styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export { Layout };
