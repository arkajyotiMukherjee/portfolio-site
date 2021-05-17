import React from "react";
import styled, { useTheme } from "styled-components";
import { FadedHeading, IFadedHeading, SectionHeading } from "./Texts";

interface ISectionHeadText extends IFadedHeading {
  fillerHeight?: string;
}

const FillerSpace = styled.div<Pick<ISectionHeadText, "fillerHeight">>`
  height: ${props => props.fillerHeight ?? "20rem"};
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const SectionHeadText: React.FC<ISectionHeadText> = ({
  fillerHeight,
  children,
  ...rest
}) => {
  const { screens } = useTheme();

  return (
    <RelativeContainer>
      {screens.xxxl ? (
        <SectionHeading>{children}</SectionHeading>
      ) : (
        <>
          <FadedHeading {...rest}>{children}</FadedHeading>
          <FillerSpace fillerHeight={fillerHeight} />
        </>
      )}
    </RelativeContainer>
  );
};

export { SectionHeadText };
