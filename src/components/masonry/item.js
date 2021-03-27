import React from "react";
import "./index.scss";

const Item = ({ children, width, height, order, style }) => {
  return (
    <div className="item" style={{ width, height, order, ...style }}>
      <div className="item-content">{children}</div>
    </div>
  );
};

export { Item };
