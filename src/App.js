import React, { useState } from "react";
import {
  Masonry,
  Item,
  items,
  ColumnCountCtx,
  defaultColumuCount
} from "./components/masonry";

import "./styles.css";

const columnCounts = [1, 2, 3];

export default function App() {
  const [count, setCount] = useState(defaultColumuCount);
  const chooseCount = (e) => {
    setCount(parseInt(e.target.value, 10));
  };
  return (
    <div className="App">
      <ColumnCountCtx.Provider value={count}>
        <h1>Hello Masonry</h1>
        <div>
          <h2>Choose a columnCount</h2>
          {columnCounts.map((c) => (
            <div>
              <input
                defaultChecked={c === count}
                onChange={chooseCount}
                type="radio"
                name="columnCount"
                value={c}
              />
              <label>{c}</label>
            </div>
          ))}
        </div>
        <h2>Result</h2>
        <Masonry columnCount={count}>
          {items.map((item, idx) => (
            <Item key={idx} {...item}>
              {idx}
            </Item>
          ))}
        </Masonry>
      </ColumnCountCtx.Provider>
    </div>
  );
}
