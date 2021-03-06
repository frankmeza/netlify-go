import React from "react";

import Layout from "../components/layout";

import About from "./blog_content/about.mdx";

import aboutStyles from "../styles/about";

const AboutPage = () => {
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
