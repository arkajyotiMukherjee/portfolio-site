import "@fontsource/inter";
import "@fontsource/merriweather";
import styled, { css, DefaultTheme } from "styled-components";

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
  font-size: ${({ theme }) =>
    theme.screens.sm
      ? theme.fontSize.sectionHeading.sm
      : theme.screens.lg
      ? theme.fontSize.sectionHeading.lg
      : theme.screens.xxl
      ? theme.fontSize.sectionHeading.xxl
      : theme.fontSize.sectionHeading.xxxl};
`;

const Heading = styled.h1<IText>`
  color: ${props => props.theme.colors.textPrimary};
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", georgia, serif;
  font-weight: normal;
  font-size: ${({ theme }) =>
    theme.screens.md
      ? theme.fontSize.heading.md
      : theme.screens.xxl
      ? theme.fontSize.heading.xxl
      : theme.fontSize.heading.xxxl};
`;

const SubHeading1 = styled.h2<IText>`
  color: ${props => props.theme.colors.textPrimary};
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", georgia, serif;
  font-weight: normal;
  font-size: ${({ theme }) =>
    theme.screens.md
      ? theme.fontSize.subHeading1.md
      : theme.screens.xxl
      ? theme.fontSize.subHeading1.xxl
      : theme.fontSize.subHeading1.xxxl};
`;

const SubHeading2 = styled.p<IText>`
  color: ${props => textVariant(props.variant, props.theme)};
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", georgia, serif;
  font-size: ${({ theme }) =>
    theme.screens.md
      ? theme.fontSize.subHeading2.md
      : theme.screens.xxl
      ? theme.fontSize.subHeading2.xxl
      : theme.fontSize.subHeading2.xxxl};
`;

const Body1 = styled.p<IText>`
  color: ${props => props.theme.colors.textPrimary};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Merriweather", Arial, sans-serif;
  font-size: ${({ theme }) =>
    theme.screens.md
      ? theme.fontSize.body1.md
      : theme.screens.xxl
      ? theme.fontSize.body1.xxl
      : theme.fontSize.body1.xxxl};
`;

const Body2 = styled.p<IText>`
  color: ${props => textVariant(props.variant, props.theme)};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Inter", Arial, sans-serif;
  font-size: ${({ theme }) =>
    theme.screens.md
      ? theme.fontSize.body2.md
      : theme.screens.xxl
      ? theme.fontSize.body2.xxl
      : theme.fontSize.body2.xxxl};
`;

const Body3 = styled.p<IText>`
  color: ${props => props.theme.colors.textPrimary};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-family: "Inter", Arial, sans-serif;
  font-size: ${({ theme }) =>
    theme.screens.md
      ? theme.fontSize.body3.md
      : theme.screens.xxl
      ? theme.fontSize.body3.xxl
      : theme.fontSize.body3.xxxl};
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
