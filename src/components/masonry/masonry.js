import React from "react";

const Masonry = ({ children, columnCount }) => {
  const width = `${100 / columnCount}%`;
  const processedChildren = React.Children.map(children, (c) =>
    React.cloneElement(c, { style: { flex: `0 0 ${width}` } })
  );
  console.log(processedChildren);
  return <div className="container">{processedChildren}</div>;
};

export { Masonry };
