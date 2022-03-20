import React from "react";

import useSWR from "swr";
import { fetcher } from "../utils";

import Footer from "../components/footer";
import Header from "../components/header";
import Posts from "../components/posts";

import Summary from "../pages/blog_content/summary.mdx";

import globalStyles from "../styles/global.js";
import containerStyles from "../styles/container.js";
import summaryStyles from "../styles/summary.js";
import Layout from "../components/layout";

const IndexPage = (): JSX.Element => {
    const { data, error } = useSWR("/health", fetcher);
    console.log({ data, error });

    return (
        <React.Fragment>
            <style jsx global>
                {globalStyles}
            </style>

            <style jsx>{containerStyles}</style>
            <style jsx>{summaryStyles}</style>

            <Layout>
                <main>
                    <div className="container">
                        <div className="summary">
                            <Summary />
                        </div>

                        <Posts />
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

export default IndexPage;
