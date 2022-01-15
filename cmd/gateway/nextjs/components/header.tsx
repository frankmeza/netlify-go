import React from "react";

import headerStyles from "../styles/header.js";

const META = {
    TITLE: {
        TEXT: "TITLE",
        URL: "/",
    },
    ABOUT: {
        TEXT: "about",
        URL: "/about",
    },
    BLOG: {
        TEXT: "blog",
        URL: "/blog",
    },
    NOW: {
        TEXT: "now",
        URL: "/now",
    },
};

const Header = () => {
    return (
        <React.Fragment>
            <style jsx>{headerStyles}</style>

            <div className="styled_header">
                <div className="header_wrapper">
                    <div className="header_title">
                        <a href={META.TITLE.URL}>{META.TITLE.TEXT}</a>
                    </div>

                    <div className="styled_nav">
                        <div className="styled_nav_list">
                            <div className="styled_nav_list_item">
                                <a href={META.ABOUT.URL}>{META.ABOUT.TEXT}</a>
                            </div>

                            <div className="styled_nav_list_item">
                                <a href={META.BLOG.URL}>{META.BLOG.TEXT}</a>
                            </div>

                            <div className="styled_nav_list_item">
                                <a href={META.NOW.URL}>{META.NOW.TEXT}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
