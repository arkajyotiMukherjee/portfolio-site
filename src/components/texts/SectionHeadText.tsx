import React from "react";
import styled, { useTheme } from "styled-components";
import { FadedHeading, IFadedHeading, SectionHeading } from "./Texts";

const FillerSpace = styled.div`
  height: 18rem;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const SectionHeadText: React.FC<IFadedHeading> = ({ children, ...rest }) => {
  const { screens } = useTheme();

  return (
    <RelativeContainer>
      {screens.xxxl ? (
        <SectionHeading>{children}</SectionHeading>
      ) : (
        <>
          <FadedHeading {...rest}>{children}</FadedHeading>
          <FillerSpace />
        </>
      )}
    </RelativeContainer>
  );
};

export { SectionHeadText };
