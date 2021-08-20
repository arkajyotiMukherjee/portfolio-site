import "@fontsource/inter";
import "@fontsource/merriweather";
import styled, { css, DefaultTheme } from "styled-components";
import { bpMaxLG, bpMaxMD, bpMaxSM, bpMaxXL } from "../../styles/breakpoint";

function textVariant(variant: Variant, theme: DefaultTheme) {
  switch (variant) {
    case "primary":
      return theme.colors.textPrimary;
    case "secondary":
      return theme.colors.textSecondary;
    case "hint":
      return theme.colors.textHint;
    default:
      return theme.colors.textPrimary;
  }
}

type Variant = "primary" | "secondary" | "hint" | undefined;

interface IText {
  textAlign?: "center" | "left" | "right" | "justify" | "initial" | "inherit";
  variant?: Variant;
}

export interface IFadedHeading {
  shiftRight?: boolean;
}

const FadedHeading = styled.h1<IFadedHeading>`
  position: absolute;
  ${props =>
    props.shiftRight &&
    css`
      right: -1.5rem;
    `}
  user-select: none;
  color: ${props => props.theme.colors.textHint};
  opacity: ${props => props.theme.opacity[30]};
  font-family: "Merriweather", georgia, serif;
  font-weight: normal;
  font-size: ${props => props.theme.fontSize.fadedHeading};
  line-height: normal;
`;

const SectionHeading = styled.h1<IText>`
  color: ${props => props.theme.colors.textHint};
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", georgia, serif;
  font-weight: normal;

  font-size: ${props => props.theme.fontSize.sectionHeading.xxl};
  ${bpMaxXL} {
    font-size: ${props => props.theme.fontSize.sectionHeading.xl};
  }
  ${bpMaxLG} {
    font-size: ${props => props.theme.fontSize.sectionHeading.lg};
  }
  ${bpMaxSM} {
    font-size: ${props => props.theme.fontSize.sectionHeading.sm};
  }
`;

const Heading = styled.h1<IText>`
  color: ${props => props.theme.colors.textPrimary};
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", georgia, serif;
  font-weight: normal;

  font-size: ${props => props.theme.fontSize.heading.xxl};
  ${bpMaxXL} {
    font-size: ${props => props.theme.fontSize.heading.xl};
  }
  ${bpMaxMD} {
    font-size: ${props => props.theme.fontSize.heading.md};
  }
`;

const SubHeading1 = styled.h2<IText>`
  color: ${props => props.theme.colors.textPrimary};
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", georgia, serif;
  font-weight: normal;

  font-size: ${props => props.theme.fontSize.subHeading1.xxl};
  ${bpMaxXL} {
    font-size: ${props => props.theme.fontSize.subHeading1.xl};
  }
  ${bpMaxMD} {
    font-size: ${props => props.theme.fontSize.subHeading1.md};
  }
`;

const SubHeading2 = styled.p<IText>`
  color: ${props => textVariant(props.variant, props.theme)};
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", georgia, serif;

  font-size: ${props => props.theme.fontSize.subHeading2.xxl};
  ${bpMaxXL} {
    font-size: ${props => props.theme.fontSize.subHeading2.xl};
  }
  ${bpMaxMD} {
    font-size: ${props => props.theme.fontSize.subHeading2.md};
  }
`;

const Body1 = styled.p<IText>`
  color: ${props => textVariant(props.variant, props.theme)};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", Arial, sans-serif;

  font-size: ${props => props.theme.fontSize.body1.xxl};
  ${bpMaxXL} {
    font-size: ${props => props.theme.fontSize.body1.xl};
  }
  ${bpMaxMD} {
    font-size: ${props => props.theme.fontSize.body1.md};
  }
`;

const Body2 = styled.p<IText>`
  color: ${props => textVariant(props.variant, props.theme)};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Inter", Arial, sans-serif;

  font-size: ${props => props.theme.fontSize.body2.xxl};
  ${bpMaxXL} {
    font-size: ${props => props.theme.fontSize.body2.xl};
  }
  ${bpMaxMD} {
    font-size: ${props => props.theme.fontSize.body2.md};
  }
`;

const Body3 = styled.p<IText>`
  color: ${props => props.theme.colors.textPrimary};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Inter", Arial, sans-serif;

  font-size: ${props => props.theme.fontSize.body3.xxl};
  ${bpMaxXL} {
    font-size: ${props => props.theme.fontSize.body3.xl};
  }
  ${bpMaxMD} {
    font-size: ${props => props.theme.fontSize.body3.md};
  }
`;

export {
  FadedHeading,
  SectionHeading,
  Heading,
  SubHeading1,
  SubHeading2,
  Body1,
  Body2,
  Body3,
};
