import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import containerStyles from "../styles/container";
import globalStyles from "../styles/global";
import layoutStyles from "../styles/layout";

interface LayoutProps {
    meta?: Object;
    children?: JSX.Element;
}

const Layout = ({ children, meta }: LayoutProps): JSX.Element => {
    return (
        <React.Fragment>
            <style jsx global>
                {globalStyles}
            </style>

            <style jsx>{containerStyles}</style>
            <style jsx>{layoutStyles}</style>

            <div className="layout_wrapper">
                <Header />

                <main>
                    <div className="container">{children}</div>
                </main>

                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Layout;
