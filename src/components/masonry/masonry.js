import React, { useContext, Children } from "react";
import { ViewportCtx } from "./ViewportCtx";
import { getColumnCountFromViewport, getCurrentSize } from "../utils";

const Masonry = ({ children }) => {
    const viewport = useContext(ViewportCtx);
    const columnCount = getColumnCountFromViewport(viewport);
    const columnWidth = Math.round(100 / columnCount);
    const childrenArray = Children.toArray(children);
    let processedChildren;
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
    if (spanIdx > -1) {
        realColumnCount =
            Math.round((100 - currentItemSizes[spanIdx]) / columnWidth) + 1;
        const span = Math.ceil(currentItemSizes[spanIdx] / columnWidth);
        const columns = new Array(realColumnCount).fill(0).map(_ => []);
        const spanStart = spanIdx % columnCount;
        childrenArray.forEach((_, index) => {
            let fixedIndex = index;
            if (index > spanIdx) {
                fixedIndex = index + span - 1;
            }
            if (
                fixedIndex % columnCount >= spanStart &&
                fixedIndex % columnCount < spanStart + span
            ) {
                columns[spanStart].push(index);
            } else if (fixedIndex % columnCount < spanStart) {
                columns[fixedIndex % columnCount].push(index);
            } else {
                columns[(fixedIndex % columnCount) - 1].push(index);
            }
        });
        processedChildren = columns.map((col, colIdx) => {
            if (colIdx === spanStart) {
                const childrenAbove = col
                    .filter(c => c < spanIdx)
                    .map(ci => {
                        return React.cloneElement(childrenArray[ci], {
                            style: {
                                flex: `0 0 ${
                                    (currentItemSizes[ci] * 100) /
                                    currentItemSizes[spanIdx]
                                }%`,
                            },
                        });
                    });
                const childrenBelow = col
                    .filter(c => c > spanIdx)
                    .map(ci =>
                        React.cloneElement(childrenArray[ci], {
                            style: {
                                flex: `0 0 ${
                                    (currentItemSizes[ci] * 100) /
                                    currentItemSizes[spanIdx]
                                }%`,
                            },
                        })
                    );
                return (
                    <div style={{ width: `${currentItemSizes[spanIdx]}%` }}>
                        {childrenAbove.length > 0 && (
                            <div
                                className="flex-row"
                                style={{
                                    flex: `0 0 100%`,
                                }}
                            >
                                {childrenAbove}
                            </div>
                        )}
                        {React.cloneElement(childrenArray[spanIdx], {
                            style: {
                                width: `${
                                    (currentItemSizes[spanIdx] * 100) /
                                    currentItemSizes[spanIdx]
                                }%`,
                                flex: `0 0`,
                            },
                        })}
                        {childrenBelow.length > 0 && (
                            <div
                                className="flex-row"
                                style={{
                                    flex: `0 0 100%`,
                                }}
                            >
                                {childrenBelow}
                            </div>
                        )}
                    </div>
                );
            } else {
                return (
                    <div
                        className="flex-column"
                        style={{ flex: `0 0 ${columnWidth}%` }}
                    >
                        {col.map(ci => {
                            return React.cloneElement(childrenArray[ci], {
                                style: {
                                    width: `${
                                        (currentItemSizes[ci] * 100) /
                                        columnWidth
                                    }%`,
                                    flex: `0 0`,
                                },
                            });
                        })}
                    </div>
                );
            }
        });
    } else {
        processedChildren = Children.map(children, c =>
            React.cloneElement(c, { style: { flex: `0 0 ${columnWidth}%` } })
        );
    }
    console.log(processedChildren);
    return <div className="container">{processedChildren}</div>;
};

export { Masonry };
