import React from "react";
import styled from "styled-components";
import { constants } from "../../../constants";
import { Chip } from "../../chip";
import { ContactBackground } from "../../image-fetch";
import { Center, RowCentered, Section } from "../../layout";
import { Anchor, DownloadFile } from "../../link";
import { Body1, SectionHeadText } from "../../texts";

const GoldenRatioLongSection = styled.div`
  grid-area: C;

  h1 {
    margin-top: 5rem;
    padding-left: 25%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Contact: React.FC = () => {
  return (
    <Section id={constants.nav.contact}>
      <SectionHeadText>{constants.contact.heading}</SectionHeadText>
      <ContactBackground>
        <GoldenRatioLongSection>
          <Center>
            <Wrapper>
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
                      <Chip src={link.src} alt={link.name} label={link.name} />
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
                  <DownloadFile>
                    <Body1>{constants.contact.resumeFormats.pdf}</Body1>
                  </DownloadFile>
                  <DownloadFile>
                    <Body1>{constants.contact.resumeFormats.docx}</Body1>
                  </DownloadFile>
                </div>
              </Center>
            </Wrapper>
          </Center>
        </GoldenRatioLongSection>
      </ContactBackground>
    </Section>
  );
};

export { Contact };
