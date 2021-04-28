import React from "react";
import styled from "styled-components";
import { Body2 } from "../texts";

interface IChip {
  src?: string;
  alt?: string;
  label: string;
}

const ChipContainer = styled.div`
  display: inline-block;
  width: fit-content;
  padding: 0.5rem 1rem;
  margin-right: 3%;
  margin-bottom: 3%;

  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textSecondary};
  border-radius: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  grid-gap: 0.5rem;
`;

const Icon = styled.img`
  width: 25%;
`;

const Chip: React.FC<IChip> = ({ src, alt, label }) => {
  return (
    <ChipContainer>
      <Wrapper>
        {src && <Icon src={src} alt={alt ?? "image"} />}
        <Body2 variant="secondary">{label}</Body2>
      </Wrapper>
    </ChipContainer>
  );
};

export { Chip };
