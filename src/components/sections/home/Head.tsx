import React from "react";
import styled from "styled-components";
import { constants } from "../../../constants";
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
        {constants.head.intro}
        <br /> &nbsp; &nbsp; {constants.head.name}.
      </Heading>
    </GoldenRatioLongSection>
  );
};

export { Head };
