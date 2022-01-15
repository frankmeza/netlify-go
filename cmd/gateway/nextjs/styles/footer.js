import css from "styled-jsx/css";

export default css.footerStyles`
    .footer_wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: var(--size-500);
        max-width: 1300px;
        padding-left: var(--size-700);
        padding-right: var(--size-700);
        height: 100%;
    }

    @media screen and (max-width: 1000px) {
        .footer_wrapper {
            padding-left: var(--size-400);
            padding-right: var(--size-400);
        }
    }

    .styled_footer {
        display: flex;
        justify-content: space-between;
        padding-top: var(--size-300);
        padding-bottom: var(--size-300);
        width: 100%;
    }

    .social_link_list {
        padding: 0;
        list-style-type: none;
        display: flex;
    }

    .social_link_item {
        margin-right: var(--size-400);
        text-transform: uppercase;
    }

    .social_link_item a {
        color: inherit;
        font-size: var(--size-300);
        list
    }

    .footer_attribution {
        font-size: var(--size-300);
        padding-top: var(--size-500);
    }

    .footer_attribution a {
        color: inherit;
    }
`;
