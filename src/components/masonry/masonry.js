import React, { useContext } from "react";
import { ViewportCtx } from "./ViewportCtx";
import { getColumnCountFromViewport } from "../utils";

const Masonry = ({ children }) => {
  const columnCount = getColumnCountFromViewport(useContext(ViewportCtx));
  const width = `${100 / columnCount}%`;
  const processedChildren = React.Children.map(children, (c) =>
    React.cloneElement(c, { style: { flex: `0 0 ${width}` } })
  );
  return <div className="container">{processedChildren}</div>;
};

export { Masonry };
