import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  screens: {
    // max-widths in pixels
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1350,
    xxl: 1780,
  },
  maxWidth: "1920px",
  fontSize: {
    fadedHeading: "350px",
    sectionHeading: {
      xxl: "196px",
      xl: "148px",
      lg: "96px",
      sm: "48px",
    },
    heading: { xxl: "96px", xl: "64px", md: "36px" },
    subHeading1: { xxl: "48px", xl: "36px", md: "24px" },
    subHeading2: { xxl: "36px", xl: "24px", md: "18px" },
    body1: { xxl: "24px", xl: "18px", md: "16px" },
    body2: { xxl: "18px", xl: "16px", md: "14px" },
    body3: { xxl: "16px", xl: "14px", md: "12px" },
  },
  colors: {
    primary: "#f2f2f2",
    secondary: "#000",
    highlight: "#2F2E41",
    textPrimary: "#000",
    textSecondary: "#fff",
    textHint: "#00000066",
  },
  graph: {
    hierarchyGraph: {
      fontSize: { md: 14, sm: 10 },
      rootRadius: { md: 32, sm: 20 },
      rectNode: {
        width: { md: 64, sm: 36 },
        height: { md: 32, sm: 20 },
        radius: { md: 4, sm: 2 },
      },
    },
  },
  carousel: {
    imageWidthFixed: "81vw",
    imageHeight: { lg: "550px", md: "300px" },
  },
  opacity: {
    0: 0,
    25: 0.25,
    30: 0.3,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
  zIndex: {
    content: 10,
  },
};

export { theme };
