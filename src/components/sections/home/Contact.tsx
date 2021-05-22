import React from "react";
import styled from "styled-components";
import { constants } from "../../../constants";
import contact from "../../../images/svg/contact.svg";
import { Chip } from "../../chip";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  RowCentered,
  Section,
} from "../../layout";
import { Anchor, DownloadFile } from "../../link";
import { Body1, SectionHeadText } from "../../texts";

const ContactWrapper = styled(Section)`
  top: 2px;
`;

const Contact: React.FC = () => {
  return (
    <ContactWrapper id={constants.nav.contact}>
      <SectionHeadText fillerHeight="25rem">
        {constants.contact.heading}
      </SectionHeadText>
      <ResponsiveRow breakpoint="md">
        <BoundedContainer breakpoint="md" width="50%">
          <Center>
            <div>
              <Body1 textAlign="center">{constants.contact.dropMail}</Body1>
              <Body1 textAlign="center">
                <Anchor boldText href={`mailto:${constants.contact.email}`}>
                  {constants.contact.email}
                </Anchor>
              </Body1>
              <Body1 textAlign="center">{constants.contact.reachMe}</Body1>
              <br />

              {/* Social Links */}
              <RowCentered wrap gap="1rem">
                {constants.contact.socialLinks.map(link => {
                  return (
                    <Anchor href={link.url} target="_blank">
                      <Chip
                        src={link.src}
                        alt={`${link.name} icon`}
                        label={link.name}
                      />
                    </Anchor>
                  );
                })}
              </RowCentered>

              {/* Download resume */}
              <Body1 textAlign="center" style={{ marginTop: "4.5rem" }}>
                {constants.contact.downloadResume}
              </Body1>

              {/* Download options */}
              <Center>
                <div>
                  {constants.contact.resumes.map(resume => {
                    return (
                      <DownloadFile url={resume.url}>
                        <Body1>{resume.format}</Body1>
                      </DownloadFile>
                    );
                  })}
                </div>
              </Center>
            </div>
          </Center>
        </BoundedContainer>
        <BoundedContainer breakpoint="md" width="50%">
          <img src={contact} alt="contact image" />
        </BoundedContainer>
      </ResponsiveRow>
    </ContactWrapper>
  );
};

export { Contact };
