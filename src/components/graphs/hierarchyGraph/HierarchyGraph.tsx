import { Group } from "@visx/group";
import { hierarchy, Tree } from "@visx/hierarchy";
import { LinkRadialStep } from "@visx/shape";
import { pointRadial } from "d3-shape";
import React from "react";
import { useTheme } from "styled-components";
import { constants } from "../../../constants";
import useForceUpdate from "./useForceUpdate";

const defaultMargin = { top: 16, left: 32, right: 32, bottom: 16 };

export type IHierarchyGraph = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

const HierarchyGraph: React.FC<IHierarchyGraph> = ({
  width: totalWidth,
  height: totalHeight,
  margin = defaultMargin,
}) => {
  const {
    screens,
    colors: { primary, secondary, textHint },
    graph: {
      hierarchyGraph: { fontSize, rootRadius, rectNode },
    },
  } = useTheme();
  const forceUpdate = useForceUpdate();

  const innerWidth = totalWidth - margin.left - margin.right;
  const innerHeight = totalHeight - margin.top - margin.bottom;

  const origin = {
    x: totalWidth / 2,
    y: totalHeight / 2,
  };
  const sizeWidth = 2 * Math.PI;
  const sizeHeight = Math.min(innerWidth, innerHeight) / 2;

  return totalWidth < 10 ? null : (
    <div>
      <svg width={totalWidth} height={totalHeight}>
        <Group>
          <Tree
            root={hierarchy(constants.about.tabs.tab2.skills, d =>
              d.isExpanded ? null : d.children
            )}
            size={[sizeWidth, sizeHeight]}
            separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth}
          >
            {tree => (
              <Group top={origin.y} left={origin.x}>
                {tree.links().map((link, i) => (
                  <LinkRadialStep
                    key={i}
                    data={link}
                    stroke={textHint}
                    strokeWidth={3}
                    fill="none"
                  />
                ))}

                {tree.descendants().map((node, key) => {
                  const nameLength = node.data.name.length;

                  let width: number = screens.sm
                    ? rectNode.width.sm
                    : rectNode.width.md;
                  if (nameLength > 6)
                    width = width + (nameLength * nameLength) / 3;

                  const height = screens.sm
                    ? rectNode.height.sm
                    : rectNode.height.md;

                  const radius = screens.sm ? rootRadius.sm : rootRadius.md;
                  const nodeRadius = screens.sm
                    ? rectNode.radius.sm
                    : rectNode.radius.md;
                  const font = screens.sm ? fontSize.sm : fontSize.md;

                  const [radialX, radialY] = pointRadial(node.x, node.y);

                  return (
                    <Group top={radialY} left={radialX} key={key}>
                      {node.depth === 0 && (
                        <circle
                          r={radius}
                          fill={secondary}
                          onClick={() => {
                            node.data.isExpanded = !node.data.isExpanded;
                            console.log(node);
                            forceUpdate();
                          }}
                        />
                      )}
                      {node.depth !== 0 && (
                        <rect
                          height={height}
                          width={width}
                          y={-height / 2}
                          x={-width / 2}
                          fill={secondary}
                          rx={nodeRadius}
                          onClick={() => {
                            node.data.isExpanded = !node.data.isExpanded;
                            forceUpdate();
                          }}
                        />
                      )}
                      <text
                        dy=".33em"
                        fontSize={font}
                        fontFamily="Arial"
                        textAnchor="middle"
                        style={{ pointerEvents: "none" }}
                        fill={primary}
                      >
                        {node.data.name}
                      </text>
                    </Group>
                  );
                })}
              </Group>
            )}
          </Tree>
        </Group>
      </svg>
    </div>
  );
};

export { HierarchyGraph };
