import styled from "styled-components";

const Section = styled.section`
  position: relative;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  overflow: hidden;
`;

export { Section };
