import React from "react";

import Layout from "../components/layout";

import nowStyles from "../styles/now.js";

import About from "./_markdown/about.mdx";

const AboutPage = () => {
    return (
        <React.Fragment>
            <style jsx>{nowStyles}</style>

            <Layout>
                <div className="now_wrapper">
                    <div className="now_copy">
                        <About />
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
