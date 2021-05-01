import { SelectEvent } from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
import React from "react";

interface ICarousel {
  children: React.ReactElement[];
}

const Carousel: React.FC<ICarousel> = ({ children }) => {
  if (!children) {
    throw Error(`Carousel require children`);
  }

  // const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT" })];

  return (
    <Flicking
      classPrefix="eg-flick"
      onSelect={(e: SelectEvent) => {}}
      circular={true}
      gap={30}
      moveType={{ type: "snap", count: Infinity }}
      autoResize={false}
      adaptive={false}
      // plugins={plugins}
      collectStatistics={false}
      style={{ height: "300px" }}
    >
      {children.map(child => {
        return child;
      })}
    </Flicking>
  );
};

export { Carousel };
