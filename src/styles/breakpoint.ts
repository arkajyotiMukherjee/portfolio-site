const maxSM = 640;
const maxMD = 768;
const maxLG = 1024;
const maxXL = 1350;
const maxXXL = 1780;

export const bpMaxSM = `@media (max-width: ${maxSM}px)`;
export const bpMaxMD = `@media (max-width: ${maxMD}px)`;
export const bpMaxLG = `@media (max-width: ${maxLG}px)`;
export const bpMaxXL = `@media (max-width: ${maxXL}px)`;
export const bpMaxXXL = `@media (max-width: ${maxXXL}px)`;

type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

export function getBreakpoint(breakpoint: Breakpoint) {
  switch (breakpoint) {
    case "sm":
      return bpMaxSM;
    case "md":
      return bpMaxMD;
    case "lg":
      return bpMaxLG;
    case "xl":
      return bpMaxXL;
    case "xxl":
      return bpMaxXXL;
    default:
      return bpMaxSM;
  }
}
