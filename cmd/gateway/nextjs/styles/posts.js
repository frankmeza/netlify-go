import css from "styled-jsx/css";

export default css.postExcerptStyles`
ul {
    padding: 0px;
    list-style: none;
    display: grid;
    justify-items: center;
    grid-gap: var(--size-600);
    grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
}

li {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border-radius: 8px;
}
`;
