import React, { useContext, useEffect, Children } from "react";
import { ViewportCtx } from "./ViewportCtx";
import { getColumnCountFromViewport, getCurrentSize } from "../utils";

const Masonry = ({ children }) => {
    const viewport = useContext(ViewportCtx);
    const columnCount = getColumnCountFromViewport(viewport);
    const columnWidth = Math.round(100 / columnCount);
    const childrenArray = Children.toArray(children);
    let processedChildren = childrenArray;
    const currentItemSizes = childrenArray.map(c => {
        const {
            props: { sizes },
        } = c;
        return getCurrentSize(sizes, viewport);
    });
    let spanIdx = -1;
    let realColumnCount = columnCount;
    
    for (let i = 0; i < currentItemSizes.length; i++) {
        if (currentItemSizes[i] !== columnWidth) {
            spanIdx = i;
            break;
        }
    }

    useEffect(() => {}, []);

    processedChildren = Children.map(children, c => {
        const {
            props: { sizes },
        } = c;
        getCurrentSize(sizes, viewport);
        return React.cloneElement(c, {
            style: { flex: `0 0 ${getCurrentSize(sizes, viewport)}%` },
        });
    });
    return <div className="container">{processedChildren}</div>;
};

export { Masonry };
