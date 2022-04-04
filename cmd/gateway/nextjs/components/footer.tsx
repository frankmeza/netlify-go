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
                                <p>{SOCIAL_LINKS.GITHUB.SITE_NAME}</p>
                            </Link>
                        </li>

                        <li className="social_link_item">
                            <Link href={SOCIAL_LINKS.LINKED_IN.URL}>
                                <p>{SOCIAL_LINKS.LINKED_IN.SITE_NAME}</p>
                            </Link>
                        </li>

                        <li className="social_link_item">
                            <Link href={SOCIAL_LINKS.TELEGRAM.URL}>
                                <p>{SOCIAL_LINKS.TELEGRAM.SITE_NAME}</p>
                            </Link>
                        </li>

                        <li className="social_link_item">
                            <Link href={SOCIAL_LINKS.INSTAGRAM.URL}>
                                <p>{SOCIAL_LINKS.INSTAGRAM.SITE_NAME}</p>
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
