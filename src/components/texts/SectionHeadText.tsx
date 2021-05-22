import React from "react";
import styled from "styled-components";
import { bpMaxXXL } from "../../styles/breakpoint";
import { FadedHeading, IFadedHeading, SectionHeading } from "./Texts";

interface ISectionHeadText extends IFadedHeading {
  fillerHeight?: string;
}

const FillerSpace = styled.div<Pick<ISectionHeadText, "fillerHeight">>`
  height: ${props => props.fillerHeight ?? "20rem"};
`;

const ConditionalSectionHeading = styled(SectionHeading)`
  display: none;

  ${bpMaxXXL} {
    display: block;
  }
`;

const ConditionalFadedHeading = styled.div`
  * {
    display: block;
  }

  ${bpMaxXXL} {
    * {
      display: none;
    }
  }
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const SectionHeadText: React.FC<ISectionHeadText> = ({
  fillerHeight,
  children,
  ...rest
}) => {
  return (
    <RelativeContainer>
      <ConditionalSectionHeading>{children}</ConditionalSectionHeading>
      <ConditionalFadedHeading>
        <FadedHeading {...rest}>{children}</FadedHeading>
        <FillerSpace fillerHeight={fillerHeight} />
      </ConditionalFadedHeading>
    </RelativeContainer>
  );
};

export { SectionHeadText };
