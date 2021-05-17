// Add support for svg imports
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Add support for jpg imports
declare module "*.jpg" {
  const content: string;
  export default content;
}

// Add support for png imports
declare module "*.png" {
  const content: string;
  export default content;
}

// Add support for json imports
declare module "*.json" {
  const content: string;
  export default content;
}
