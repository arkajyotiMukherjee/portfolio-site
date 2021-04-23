import React from "react";
import { constants } from "../../../constants";
import { Section } from "../../layout";
import { SectionHeadText } from "../../texts";

const Projects: React.FC = () => {
  return (
    <Section>
      <SectionHeadText shiftRight>{constants.projects.heading}</SectionHeadText>
    </Section>
  );
};

export { Projects };
