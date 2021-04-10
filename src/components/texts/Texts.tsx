import styled, { DefaultTheme } from "styled-components";

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

const SectionHeading = styled.h1<IText>`
  color: ${props => props.theme.colors.textHint};
  text-align: ${props => props.textAlign ?? "left"};
  font-weight: normal;
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.sectionHeading.md
      : props.theme.fontSize.sectionHeading.lg};
`;

const Heading = styled.h1<IText>`
  color: ${props => props.theme.colors.textPrimary};
  text-align: ${props => props.textAlign ?? "left"};
  font-weight: normal;
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.heading.md
      : props.theme.fontSize.heading.lg};
`;

const SubHeading = styled.p<IText>`
  color: ${props => textVariant(props.variant, props.theme)};
  text-align: ${props => props.textAlign ?? "left"};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.subHeading.md
      : props.theme.fontSize.subHeading.lg};
`;

const Body1 = styled.p<IText>`
  color: ${props => props.theme.colors.textPrimary};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.body1.md
      : props.theme.fontSize.body1.lg};
`;

const Body2 = styled.p<IText>`
  color: ${props => props.theme.colors.textPrimary};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.body2.md
      : props.theme.fontSize.body2.lg};
`;

const Body3 = styled.p<IText>`
  color: ${props => props.theme.colors.textPrimary};
  line-height: 160%;
  text-align: ${props => props.textAlign ?? "left"};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.body3.md
      : props.theme.fontSize.body3.lg};
`;

export { SectionHeading, Heading, SubHeading, Body1, Body2, Body3 };
