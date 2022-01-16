import css from "styled-jsx/css";

export default css.headerStyles`
    .styled_header {
        padding-top: var(--size-500);
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
        background-color: none;
        font-size: var(--size-500);
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

    @media screen and (max-width: 700px) {
        .styled_nav_list_item {
            margin-left: 1rem;
        }
    }

    .styled_nav_list_item {
        margin-left: 2rem;
        color: inherit;
        text-transform: uppercase;
        font-size: var(--size-300);
        letter-spacing: 0.1rem;
    }

    .styled_nav_list_item a {
        text-decoration: none;
        color: inherit;
        font-size: var(--size-300);
        letter-spacing: 0.1rem;
    }

    @media screen and (max-width: 700px) {
        .styled_nav_list_item a {
            font-size: 0.7rem;
        }
    }
`;
