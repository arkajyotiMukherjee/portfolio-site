import React from "react";
import styled from "styled-components";

const DownloadLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
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

interface IDownLoadFile {
  url: string;
}

const DownloadFile: React.FC<IDownLoadFile> = ({ url, children }) => {
  return (
    <DownloadLink href={url} download>
      {children}
    </DownloadLink>
  );
};

export { DownloadFile };
