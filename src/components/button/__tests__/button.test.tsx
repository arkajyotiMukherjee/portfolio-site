import { render } from "@testing-library/react";
import "jest-styled-components";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { Button } from "../Button";

it("matches snapshot", () => {
  jest.isolateModules(() => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Button>Hello World!</Button>
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
