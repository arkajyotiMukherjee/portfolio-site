/// <reference types="react/index.d.ts"/>
/// <reference types="styled-components/cssprop" />

import "styled-components";

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    screens: {
      // max-widths in pixels
      [key: string]: number;
    };
    maxWidth: string;
    fontSize: {
      fadedHeading: string;
      sectionHeading: {
        xxl: string;
        xl: string;
        lg: string;
        sm: string;
      };
      heading: { xxl: string; xl: string; md: string };
      subHeading1: { xxl: string; xl: string; md: string };
      subHeading2: { xxl: string; xl: string; md: string };
      body1: { xxl: string; xl: string; md: string };
      body2: { xxl: string; xl: string; md: string };
      body3: { xxl: string; xl: string; md: string };
    };
    colors: {
      primary: string;
      secondary: string;
      highlight: string;
      textPrimary: string;
      textSecondary: string;
      textHint: string;
    };
    graph: {
      hierarchyGraph: {
        fontSize: { md: number; sm: number };
        rootRadius: { md: number; sm: number };
        rectNode: {
          width: { md: number; sm: number };
          height: { md: number; sm: number };
          radius: { md: number; sm: number };
        };
      };
    };
    carousel: {
      imageWidthFixed: string;
      imageHeight: { lg: string; md: string };
    };
    opacity: {
      0: number;
      25: number;
      30: number;
      50: number;
      75: number;
      100: number;
    };
    zIndex: {
      content: number;
    };
  }
}

// Add support for Jest configuration
declare global {
  namespace NodeJS {
    export interface Global {
      ___loader: any;
    }
  }
}
