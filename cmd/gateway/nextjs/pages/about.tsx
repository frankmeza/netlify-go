import React from "react";

import Layout from "../components/layout";

import About, * as AboutProps from "./blog_content/about.mdx";
import aboutStyles from "../styles/about.js";

interface AboutPropsMdx {
    title: string
}

const mdxProps: AboutPropsMdx = {
    title: AboutProps["title"]
}

const AboutPage = () => {
    console.table({ mdxProps })
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
