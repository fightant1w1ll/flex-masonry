import React, { useState } from "react";
import {
    Masonry,
    Item,
    ViewportCtx,
    defaultViewport,
} from "./components/masonry";
import { items } from "./components/utils";

import "./styles.css";

const viewports = ["small", "medium", "large"];

export default function App() {
    const [viewport, setViewport] = useState(defaultViewport);
    const chooseCount = e => {
        setViewport(e.target.value);
    };
    return (
        <div className="App">
            <ViewportCtx.Provider value={viewport}>
                <h1>Hello Masonry</h1>
                <div>
                    <h2>Choose a viewport</h2>
                    {viewports.map(c => (
                        <div>
                            <input
                                defaultChecked={c === viewport}
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
                <Masonry>
                    {items.map(({ content, ...rest }, idx) => (
                        <Item key={idx} {...rest}>
                            {content}
                        </Item>
                    ))}
                </Masonry>
            </ViewportCtx.Provider>
        </div>
    );
}
