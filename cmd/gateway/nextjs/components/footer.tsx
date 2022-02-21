import Link from "next/link";
import React from "react";
import {
    ATTRIBUTION,
    EMOJI,
    SOCIAL_LINKS,
    THEME_AUTHOR,
} from "../constant_values";
import footerStyles from "../styles/footer";

const Footer = () => {
    return (
        <React.Fragment>
            <style jsx>{footerStyles}</style>

            <div className="footer_wrapper">
                <div className="styled_footer">
                    <ul className="social_link_list">
                        <li className="social_link_item">
                            <Link href={SOCIAL_LINKS.GITHUB.URL}>
                                <a>{SOCIAL_LINKS.GITHUB.SITE_NAME}</a>
                            </Link>
                        </li>

                        <li className="social_link_item">
                            <Link href={SOCIAL_LINKS.LINKED_IN.URL}>
                                <a>{SOCIAL_LINKS.LINKED_IN.SITE_NAME}</a>
                            </Link>
                        </li>

                        <li className="social_link_item">
                            <Link href={SOCIAL_LINKS.TELEGRAM.URL}>
                                <a>{SOCIAL_LINKS.TELEGRAM.SITE_NAME}</a>
                            </Link>
                        </li>

                        <li className="social_link_item">
                            <Link href={SOCIAL_LINKS.INSTAGRAM.URL}>
                                <a>{SOCIAL_LINKS.INSTAGRAM.SITE_NAME}</a>
                            </Link>
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
