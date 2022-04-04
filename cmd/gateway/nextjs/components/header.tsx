import React from "react";
import Link from "next/link";

import { META } from "../constant_values";
import headerStyles from "../styles/header.js";

const Header = () => {
    return (
        <React.Fragment>
            <style jsx>{headerStyles}</style>

            <div className="styled_header">
                <div className="header_wrapper">
                    <div className="header_title">
                        <Link href={META.TITLE.URL}>
                            <p>{META.TITLE.TEXT}</p>
                        </Link>
                    </div>

                    <div className="styled_nav">
                        <div className="styled_nav_list">
                            <div className="styled_nav_list_item">
                                <Link href={META.ABOUT.URL}>
                                    <p>{META.ABOUT.TEXT}</p>
                                </Link>
                            </div>

                            <div className="styled_nav_list_item">
                                <Link href={META.BLOG.URL}>
                                    <p>{META.BLOG.TEXT}</p>
                                </Link>
                            </div>

                            <div className="styled_nav_list_item">
                                <Link href={META.NOW.URL}>
                                    <p>{META.NOW.TEXT}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
