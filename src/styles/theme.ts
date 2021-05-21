import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  screens: {
    // max-widths in pixels
    xs: 450,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1350,
    xxxl: 1780,
  },
  maxWidth: "1920px",
  fontSize: {
    fadedHeading: "350px",
    sectionHeading: {
      xxxl: "196px",
      xxl: "148px",
      lg: "96px",
      sm: "48px",
    },
    heading: { xxxl: "96px", xxl: "64px", md: "36px" },
    subHeading1: { xxxl: "48px", xxl: "36px", md: "24px" },
    subHeading2: { xxxl: "36px", xxl: "24px", md: "18px" },
    body1: { xxxl: "24px", xxl: "18px", md: "16px" },
    body2: { xxxl: "18px", xxl: "16px", md: "14px" },
    body3: { xxxl: "16px", xxl: "14px", md: "12px" },
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
