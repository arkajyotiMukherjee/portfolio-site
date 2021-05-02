import "modern-css-reset/dist/reset.min.css";
import { DefaultTheme } from "styled-components";
import media from "use-media";
import { theme as themeObject } from "./theme";

const theme = (): DefaultTheme => {
  const { screens, ...themeValues }: DefaultTheme = themeObject;
  const breakpointSizes = Object.keys(screens).reduce(
    (accumulator, key: string) => {
      const value = media({ maxWidth: screens[key] });
      return {
        ...accumulator,
        [key]: value,
      };
    },
    {}
  );

  return {
    ...themeValues,
    screens: breakpointSizes,
  };
};

export { theme };
