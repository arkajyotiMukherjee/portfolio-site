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

  color: ${props => props.theme.colors.textHint};
  opacity: ${props => props.theme.opacity[30]};
  font-weight: normal;
  font-size: ${props => props.theme.fontSize.fadedHeading};
`;

const SectionHeading = styled.h1<IText>`
  color: ${props => props.theme.colors.textHint};
  text-align: ${props => props.textAlign ?? "left"};
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
  font-weight: normal;
  font-size: ${({ theme }) =>
    theme.screens.md
      ? theme.fontSize.heading.md
      : theme.screens.xxl
      ? theme.fontSize.heading.xxl
      : theme.fontSize.heading.xxxl};
`;

const SubHeading = styled.p<IText>`
  color: ${props => textVariant(props.variant, props.theme)};
  text-align: ${props => props.textAlign ?? "left"};
  font-size: ${({ theme }) =>
    theme.screens.md
      ? theme.fontSize.subHeading.md
      : theme.screens.xxl
      ? theme.fontSize.subHeading.xxl
      : theme.fontSize.subHeading.xxxl};
`;

const Body1 = styled.p<IText>`
  color: ${props => props.theme.colors.textPrimary};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
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
  SubHeading,
  Body1,
  Body2,
  Body3,
};
