import React from "react";

import Layout from "../components/layout";

import About from "./blog_content/about.mdx";

import nowStyles from "../styles/now";

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
