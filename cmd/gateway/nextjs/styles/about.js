import css from "styled-jsx/css";

// todo make css const for margin-top, margin-bottom

export default css.aboutStyles`
.about_wrapper {
    // border: solid red;
    margin-top: 9rem;
    margin-bottom: 21rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
}

@media screen and (max-width: 1000px) {
    .about_wrapper {
        flex-direction: column;
    }

    .about_wrapper > * {
        margin-top: 2rem;
        width: 100%;
        text-align: center;
    }
}

.about_image_wrapper {
    display: block;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    margin: var(--size-900) 0;
}

.about_copy {
    max-width: 60ch;
}

.about_copy > h2 {
    margin-top: 3rem;
}

.about_copy p {
        font-size: var(--size-400);
    }
}
`;
