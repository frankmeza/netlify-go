import css from "styled-jsx/css";

// todo make css const for margin-top, margin-bottom

export default css.summaryStyles`
    .summary {
        align-items: center;
        box-sizing: border-box;
        color: #37292C;
        display: flex;
        flex-direction: column;
        font-family: 'Poppins', Hasklig, -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,Ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        line-height: 1.5;
        max-width: 60ch;
        margin-right: auto;
        margin-left: auto;
        margin-top: var(--size-800);
        margin-bottom: var(--size-900);
        text-align: center;
        text-rendering: optimizeSpeed;
        -webkit-box-align: center;
    }
`;
