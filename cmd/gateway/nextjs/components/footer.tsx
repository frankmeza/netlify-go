import React from "react";
import footerStyles from "../styles/footer";

const ATTRIBUTION = "Hand-crafted with love by ";
const EMOJI = "  🤙🏽 🤙🏽  "

const THEME_AUTHOR = {
    NAME: "Yinka Adedire",
    TWITTER: "https://twitter.com/yinkakun",
};

const SOCIAL_LINKS = {
    GITHUB: {
        SITE_NAME: "GITHUB",
        NAME: "",
        URL: "",
    },
    LINKED_IN: {
        SITE_NAME: "LINKED IN",
        NAME: "",
        URL: "",
    },
    TELEGRAM: {
        SITE_NAME: "TELEGRAM",
        NAME: "",
        URL: "",
    },
    INSTAGRAM: {
        SITE_NAME: "INSTAGRAM",
        NAME: "",
        URL: "",
    },
};

const Footer = () => {
    return (
        <React.Fragment>
            <style jsx>{footerStyles}</style>

            <div className="footer_wrapper">
                <div className="styled_footer">
                    <ul className="social_link_list">
                        <li className="social_link_item">
                            <a href={SOCIAL_LINKS.GITHUB.URL}>
                                {SOCIAL_LINKS.GITHUB.SITE_NAME}
                            </a>
                        </li>

                        <li className="social_link_item">
                            <a href={SOCIAL_LINKS.LINKED_IN.URL}>
                                {SOCIAL_LINKS.LINKED_IN.SITE_NAME}
                            </a>
                        </li>

                        <li className="social_link_item">
                            <a href={SOCIAL_LINKS.TELEGRAM.URL}>
                                {SOCIAL_LINKS.TELEGRAM.SITE_NAME}
                            </a>
                        </li>

                        <li className="social_link_item">
                            <a href={SOCIAL_LINKS.INSTAGRAM.URL}>
                                {SOCIAL_LINKS.INSTAGRAM.SITE_NAME}
                            </a>
                        </li>
                    </ul>

                    <div className="footer_attribution">
                        {ATTRIBUTION}
                        <a href={THEME_AUTHOR.TWITTER}>{THEME_AUTHOR.NAME}</a>
                        {EMOJI}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
