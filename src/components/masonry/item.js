import React, { useContext } from "react";
import { ViewportCtx } from "./ViewportCtx";
import { getColumnCountFromViewport, getCurrentSize } from "../utils";
import "./index.scss";

const Item = ({ children, width, height, order, style, sizes }) => {
  const viewport = useContext(ViewportCtx);
  // const columnCount = getColumnCountFromViewport(viewport);
  const currentSize = getCurrentSize(sizes, viewport);
  return (
    <div
      className="item"
      style={{ width, height, order, ...style, flex: `0 0 ${currentSize}%` }}
    >
      <div className="item-content">{children}</div>
    </div>
  );
};

export { Item };
