import React from "react";
import { constants } from "../../../constants";
import hero from "../../../images/svg/hero.svg";
import { BoundedContainer, Center, ResponsiveRow } from "../../layout";
import { Heading } from "../../texts";

const Head: React.FC = () => {
  return (
    <ResponsiveRow breakpoint="sm">
      <BoundedContainer breakpoint="sm" width="50%">
        <Center>
          <Heading>
            {constants.head.intro}
            <br /> &nbsp; &nbsp; {constants.head.name}.
          </Heading>
        </Center>
      </BoundedContainer>
      <BoundedContainer breakpoint="sm" width="50%">
        <img src={hero} alt="hero image" />
      </BoundedContainer>
    </ResponsiveRow>
  );
};

export { Head };
