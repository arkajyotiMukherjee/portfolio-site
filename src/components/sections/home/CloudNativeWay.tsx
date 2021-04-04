import React from "react";
import { useTheme } from "styled-components";
import { HandsomePikachu } from "../../image-fetch/HandsomePikachu";
import { InfoSection } from "../../info-section";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";
import { Heading } from "../../texts";

const CloudNativeWay: React.FC = () => {
  const { purple, darkGreen, lightGreen, yellow } = useTheme().colors;
  return (
    <SectionDark>
      <div>
        <Heading textAlign="center">Lorem ipsum dolor sit amet</Heading>
        <ResponsiveRow breakpoint="xl">
          <BoundedContainer breakpoint="xl" width="50%" margin="0">
            <HandsomePikachu />
          </BoundedContainer>

          <BoundedContainer breakpoint="xl" width="45%" margin="0">
            <ResponsiveRow breakpoint="xl">
              <InfoSection
                color={purple}
                imgSrc="/svg/declarative-chaos.svg"
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum. Aliquam tincidunt tristique risus in vestibulum. Donec quis egestas eros. Vestibulum ac diam nec libero sodales venenatis sed in sem."
              />
              <InfoSection
                color={darkGreen}
                imgSrc="/svg/ready-experiments.svg"
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum. Aliquam tincidunt tristique risus in vestibulum. Donec quis egestas eros. Vestibulum ac diam nec libero sodales venenatis sed in sem."
              />
            </ResponsiveRow>
            <ResponsiveRow breakpoint="xl">
              <InfoSection
                color={lightGreen}
                imgSrc="/svg/create-your-own.svg"
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum. Aliquam tincidunt tristique risus in vestibulum. Donec quis egestas eros. Vestibulum ac diam nec libero sodales venenatis sed in sem."
              />
              <InfoSection
                color={yellow}
                imgSrc="/svg/chaos-workflows.svg"
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel turpis malesuada vestibulum. Aliquam tincidunt tristique risus in vestibulum. Donec quis egestas eros. Vestibulum ac diam nec libero sodales venenatis sed in sem."
              />
            </ResponsiveRow>
          </BoundedContainer>
        </ResponsiveRow>
      </div>
    </SectionDark>
  );
};

export { CloudNativeWay };
