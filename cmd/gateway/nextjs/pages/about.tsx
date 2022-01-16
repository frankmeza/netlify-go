import React from "react";

import Layout from "../components/layout";

import aboutStyles from "../styles/about.js";

import About from "./_markdown/about.mdx";

const AboutPage = ({ source }) => {
    return (
        <React.Fragment>
            <style jsx>{aboutStyles}</style>

            <Layout>
                <div className="about_wrapper">
                    <img
                        className="about_image_wrapper"
                        src="https://http.cat/200"
                    />

                    <div className="about_copy">
                        <About />
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
