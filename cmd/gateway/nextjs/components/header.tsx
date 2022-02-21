import React from "react";
import Link from "next/link";

import { META } from "../constant_values/index.js";
import headerStyles from "../styles/header.js";

const Header = () => {
    return (
        <React.Fragment>
            <style jsx>{headerStyles}</style>

            <div className="styled_header">
                <div className="header_wrapper">
                    <div className="header_title">
                        <Link href={META.TITLE.URL}>
                            <a>{META.TITLE.TEXT}</a>
                        </Link>
                    </div>

                    <div className="styled_nav">
                        <div className="styled_nav_list">
                            <div className="styled_nav_list_item">
                                <Link href={META.ABOUT.URL}>
                                    <a>{META.ABOUT.TEXT}</a>
                                </Link>
                            </div>

                            <div className="styled_nav_list_item">
                                <Link href={META.BLOG.URL}>
                                    <a>{META.BLOG.TEXT}</a>
                                </Link>
                            </div>

                            <div className="styled_nav_list_item">
                                <Link href={META.NOW.URL}>
                                    <a>{META.NOW.TEXT}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
//*[@id="__next"]/div[1]/div/div[2]/div/div[1]/a
export default Header;
