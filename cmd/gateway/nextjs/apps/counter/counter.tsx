import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import { decrement, increment } from "../../store/slices/counter";

import { STRINGS } from "../../constant_values";
import classNames from "classnames";
import useSWR from "swr";
import { fetcher } from "../../utils";

const { DECREMENT, INCREMENT } = STRINGS;

const decrementButtonStyle = classNames(
    "button",
    "is-danger",
    "is-large",
    "m-6",
);

const incrementButtonStyle = classNames(
    "button",
    "is-primary",
    "is-large",
    "m-6",
);

const sumStyles = classNames("is-size-2");

const containerStyles = classNames("m-6")

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

    const { data, error } = useSWR("/api/fake_api", fetcher, { refreshInterval: 1000 });
    console.table({ data, error })

    return (
        <React.Fragment>
            <div className={containerStyles}>
                <div className="buttons">
                    <button
                        aria-label="Increment value"
                        className={incrementButtonStyle}
                        onClick={onClickIncrement}
                    >
                        {INCREMENT}
                    </button>

                    <span className={sumStyles}>{count}</span>

                    <button
                        aria-label="Decrement value"
                        className={decrementButtonStyle}
                        onClick={onClickDecrement}
                    >
                        {DECREMENT}
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Counter;