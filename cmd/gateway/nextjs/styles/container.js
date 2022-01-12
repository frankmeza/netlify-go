import css from "styled-jsx/css";

export default css.container`
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    padding-left: var(--size-700);
    padding-right: var(--size-700);
    height: 100%;

    @media screen and (max-width: 1000px) {
        & {
            padding-left: var(--size-400);
            padding-right: var(--size-400);
        }
    }
`;
