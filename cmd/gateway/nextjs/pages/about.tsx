import React from "react";

import Layout from "../components/layout";
import About from "./_markdown/about.mdx";

export default function Post({ source }) {
    const tres = `fraaaank`
    return (
        <React.Fragment>
            <Layout>
                <React.Fragment>
                    <About tres />
                    <div className="wrapper"></div>
                </React.Fragment>
            </Layout>
        </React.Fragment>
    );
}
