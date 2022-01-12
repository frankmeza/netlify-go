// todo: make these into a single default export and add the names as classes
// like how global.js uses element selectors

import css from "styled-jsx/css";

export default css.header`
    .styled_header {
        padding-top: var(--size-300);
    }

    .header_wrapper {
        display: flex;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
        max-width: 1300px;
        padding-left: var(--size-700);
        padding-right: var(--size-700);
        height: 100%;
    }

    @media screen and (max-width: 1000px) {
        .header_wrapper {
            padding-left: var(--size-400);
            padding-right: var(--size-400);
        }
    }

    .header_title {
        margin-right: auto;
        max-width: 1300px;
        padding-left: var(--size-700);
        padding-right: var(--size-700);
        height: 100%;
    }

    .header_title a {
        text-decoration: none;
        background-color: none;;
    }

    @media screen and (max-width: 1000px) {
        .header_title {
            padding-left: var(--size-400);
            padding-right: var(--size-400);
        }
    }

    .styled_nav {
        position: static;
        padding: 0;
        background: transparent;
        backdrop-filter: unset;
    }

    .styled_nav_list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
        list-style-type: none;
    }

    .styled_nav_list_item:not(:last-of-type) {
        margin-right: 2rem;
    }

    @media screen and (max-width: 700px) {
        .styled_nav_list_item:not(:last-of-type) {
            margin-right: 1rem;
        }
    }

    .styled_nav_list_item a {
        color: inherit;
        text-transform: uppercase;
        font-size: var(--size-300);
        text-decoration: none;
        letter-spacing: 0.1rem;
    }

    @media screen and (max-width: 700px) {
        .styled_nav_list_item a {
            font-size: 0.7rem;
        }
    }
`;
