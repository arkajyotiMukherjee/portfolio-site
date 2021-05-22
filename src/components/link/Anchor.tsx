import { Link } from "gatsby";
import styled from "styled-components";

interface IAnchor {
  boldText?: boolean;
}
const Anchor = styled(Link).attrs({
  rel: "noopener",
})<IAnchor>`
  font-weight: ${props => (props.boldText ? "bold" : "normal")};
  text-decoration: underline;
  cursor: pointer;
`;

export { Anchor };
