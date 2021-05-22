import { navigate } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Image404 } from "../components/image-fetch";
import {
  BoundedContainer,
  Center,
  Layout,
  ResponsiveRow,
} from "../components/layout";
import { Body1, Heading } from "../components/texts";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const PageNotFound: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Center>
          <ResponsiveRow breakpoint="lg">
            <BoundedContainer breakpoint="lg" width="50%" margin="0 0 0 5rem">
              <Heading>
                Whoops!
                <br />
                This page is unavailable
              </Heading>
              <br />

              <Body1>The page does not exist, or please try again later</Body1>
              <br />

              <Body1 onClick={() => navigate("/")}>Go back home</Body1>
            </BoundedContainer>

            <BoundedContainer breakpoint="lg" width="50%">
              <Image404 />
            </BoundedContainer>
          </ResponsiveRow>
        </Center>
      </Container>
    </Layout>
  );
};

export default PageNotFound;
