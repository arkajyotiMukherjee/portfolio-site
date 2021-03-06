import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DiscreetProgressBar } from "../progressbar";
import { SubHeading2 } from "../texts";

interface ITabs {
  defaultActiveIndex: number;
  autoSwitch?: boolean;
  children: React.ReactElement[];
}

interface ITabPane {
  index: number;
  label: React.ReactNode;
}

const TabPane: React.FC<ITabPane> = ({ children }) => {
  return <div>{children}</div>;
};

const TabSwitcher = styled.div`
  display: flex;

  & p {
    margin-right: 12%;
  }
`;

const Tab = styled(SubHeading2)`
  cursor: pointer;
`;

const Tabs: React.FC<ITabs> = ({
  defaultActiveIndex,
  autoSwitch,
  children,
}) => {
  if (!children) {
    throw Error(`Tabs require TabPane as children`);
  }
  children.map(child => {
    if (child.type !== TabPane) {
      throw Error(`Tabs require TabPane as children`);
    }
  });

  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);
  const totalNoOfTabs = children.length;

  useEffect(() => {
    const timer = setInterval(
      () => autoSwitch && setActiveIndex((activeIndex % totalNoOfTabs) + 1),
      5000
    );

    return () => clearInterval(timer);
  });

  return (
    <div>
      <TabSwitcher>
        {children.map(child => {
          return child.props.index === activeIndex ? (
            <Tab>{child.props.label}</Tab>
          ) : (
            <Tab
              variant="hint"
              onClick={() => setActiveIndex(child.props.index)}
            >
              {child.props.label}
            </Tab>
          );
        })}
      </TabSwitcher>
      <DiscreetProgressBar
        currentStep={activeIndex}
        totalSteps={totalNoOfTabs}
        leftShift={30}
      />

      {children.map(child => {
        return child.props.index === activeIndex ? child : <></>;
      })}
    </div>
  );
};

export { Tabs, TabPane };
