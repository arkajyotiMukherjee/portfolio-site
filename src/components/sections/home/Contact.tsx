import React from "react";
import { constants } from "../../../constants";
import { Section } from "../../layout";
import { SectionHeadText } from "../../texts";

const Contact: React.FC = () => {
  return (
    <Section id={constants.nav.contact}>
      <SectionHeadText>{constants.contact.heading}</SectionHeadText>
    </Section>
  );
};

export { Contact };
