import React from "react";
import styled from "styled-components";
import { Heading } from "../../texts";

const GoldenRatioLongSection = styled.div`
  grid-area: H;

  h1 {
    margin-top: 5rem;
    padding-left: 25%;
  }
`;

const Head: React.FC = () => {
  return (
    <GoldenRatioLongSection>
      <Heading>
        hi, I'm
        <br /> &nbsp; &nbsp; arko.
      </Heading>
    </GoldenRatioLongSection>
  );
};

export { Head };
