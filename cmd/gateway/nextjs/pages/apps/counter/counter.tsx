import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store";
import { decrement, increment } from "../../../store/slices/counter";

import { getClassNames } from "./utils";
import { STRINGS } from "../../../constant_values";

const { DECREMENT, INCREMENT } = STRINGS;

const Counter = () => {
    const dispatch = useDispatch();

    const count = useSelector((state: RootState) => {
        return state.counter.value;
    });

    const onClickIncrement = () => {
        dispatch(increment());
    };

    const onClickDecrement = () => {
        dispatch(decrement());
    };

    const { decrementButtonStyle, incrementButtonStyle } = getClassNames();

    return (
        <React.Fragment>
            <CounterAppContainer>
                <div className="counter_app_container">
                    <div className="buttons">
                        <button
                            aria-label="Increment value"
                            className={incrementButtonStyle}
                            onClick={onClickIncrement}
                        >
                            {INCREMENT}
                        </button>

                        <span className="counter_app_sum">{count}</span>

                        <button
                            aria-label="Decrement value"
                            className={decrementButtonStyle}
                            onClick={onClickDecrement}
                        >
                            {DECREMENT}
                        </button>
                    </div>
                </div>
            </CounterAppContainer>
        </React.Fragment>
    );
};

export default Counter;

const CounterAppContainer = styled.div`
    .counter_app_container {
        align-items: center;
        display: flex;
        flex: 1;
    }

    .counter_app_button {
        align-content: center;
        display: flex;
        margin: 2rem;
    }

    .counter_app_sum {
        font-size: 3rem;
        margin-left: 2rem;
        margin-top: 2rem;
        padding: 1.5rem;
    }
`;
