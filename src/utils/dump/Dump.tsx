import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 16px;
  font-size: ${props => props.theme.fontSize.body1.md};

  strong {
    color: ${props => props.theme.colors.textSecondary};
    background-color: ${props => props.theme.colors.secondary};
  }
`;

interface IDump {
  data: object;
}

const Dump: React.FC<IDump> = ({ data }) => (
  <Wrapper>
    {Object.entries(data).map(([key, val]) => (
      <pre key={key}>
        <strong>{key} :</strong>
        {JSON.stringify(val, null, 2)}
      </pre>
    ))}
  </Wrapper>
);

export { Dump };
