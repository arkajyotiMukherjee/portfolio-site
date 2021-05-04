import styled from "styled-components";

interface IAnchor {
  boldText?: boolean;
}
const Anchor = styled.a.attrs({
  rel: "noopener",
})<IAnchor>`
  font-weight: ${props => (props.boldText ? "bold" : "normal")};
  text-decoration: underline;
  cursor: pointer;
`;

export { Anchor };
