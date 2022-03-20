import css from "styled-jsx/css";

export default css.postExcerptStyles`
ul {
    display: grid;
    grid-gap: var(--size-600);
    grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
    justify-items: center;
    list-style: none;
    margin: 0 6rem;
    padding: 0px;
}

@media screen and (max-width: 500px) {
    & {
        display: block;
    }
}

li {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    position: relative;
}

.post-excerpt-tag {
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 4px;
    box-sizing: border-box;
    color: inherit;
    font-size: var(--size-300);
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
    padding: 0.2rem 0.6rem;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 2;
}

.post-excerpt-bottom-row {
    margin-top: 2rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.post-excerpts-link-to-blog {
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    color: inherit;
    display: block;
    margin-bottom: var(--size-800);
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--size-800);
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
}
`;
