import styled from "styled-components";

const ExternalLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener",
})`
  text-decoration: underline;

  ::after {
    content: "";
    display: inline-block;
    position: relative;
    top: 0.2rem;
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.3rem;
    margin-right: 2rem;
    background: transparent url("assets/external-link.svg") no-repeat;
    background-size: contain;
    background-position: center;
  }

  p,
  div {
    display: inline;
  }
`;

export { ExternalLink };
