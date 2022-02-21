import css from "styled-jsx/css";

export default css.layout`
min-height: 100vh;
display: flex;
flex-direction: column;

& main {
    margin-top: auto;
    margin-bottom: auto;
}

& footer {
    margin-top: auto;
}
`;
