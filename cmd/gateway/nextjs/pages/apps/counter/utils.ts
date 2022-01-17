import classNames from "classnames";

export const getClassNames = () => {
    const decrementButtonStyle = classNames("button", "is-danger", "is-large", "counter_app_button");
    const incrementButtonStyle = classNames("button", "is-primary", "is-large", "counter_app_button");

    return {
        decrementButtonStyle,
        incrementButtonStyle,
    };
};
