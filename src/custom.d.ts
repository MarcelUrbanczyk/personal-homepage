declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  export default ReactComponent;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}
