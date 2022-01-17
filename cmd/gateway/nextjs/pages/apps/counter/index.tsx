import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "../../../store";
import Counter from "./counter";

const CounterApp = () => {
    return (
        <Provider store={store}>
            <React.StrictMode>
                <Counter />
            </React.StrictMode>
        </Provider>
    );
};

export default CounterApp;
