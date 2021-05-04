import styled from "styled-components";

const DownloadFile = styled.a.attrs({
  target: "_blank",
  rel: "noopener",
  download: true,
})`
  text-decoration: underline;
  margin-left: 2rem;

  ::before {
    content: "";
    display: inline-block;
    position: relative;
    top: 0.2rem;
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.3rem;
    background: transparent url("assets/download.svg") no-repeat;
    background-size: contain;
    background-position: center;
  }

  p,
  div {
    display: inline;
  }
`;

export { DownloadFile };
