import React from "react";

import header from "../styles/header.js";

const Header = () => {
    return (
        <React.Fragment>
            <style jsx>{header}</style>

            <div className="styled_header">
                <div className="header_wrapper">
                    <div className="header_title">
                        <a href="/">YOUR BLOG TITLE</a>
                    </div>

                    <div className="styled_nav">
                        <div className="styled_nav_list">
                            <div className="styled_nav_list_item">
                                <a href="/blog">Blog</a>
                            </div>

                            <div className="styled_nav_list_item">
                                <a href="/about">About</a>
                            </div>

                            <div className="styled_nav_list_item">
                                <a href="/now">Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
