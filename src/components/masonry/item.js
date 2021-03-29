import React, { useContext } from "react";
import { ViewportCtx } from "./ViewportCtx";
import { getColumnCountFromViewport, getCurrentSize } from "../utils";
import "./index.scss";

const Item = ({ children, width, height, order, style, sizes }) => {
    const viewport = useContext(ViewportCtx);
    return (
        <div className="item" style={{ width, height, order, ...style }}>
            <div className="item-content">{children}</div>
        </div>
    );
};

export { Item };
/**
 *  for first render, use flex row box to layout every item, after getting all items's client size, start relayout.
 *  
 *  Basic column count is calculate with current viewport.If one column spans, real column count will descrease.
 *  We can figure out if current row is compatible with the previous one. 
 * 
 *  If compatiable, means every item in current row can be place into one column of previous row. 
 *    Then calculate which column a item belongs to, and update that columnHeight.
 *  else create a new flex row box to continue layout, reset columnHeightArray
 *
 *
 *
 *
 *  */
