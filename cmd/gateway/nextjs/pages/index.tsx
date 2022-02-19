import React from "react";

import useSWR from "swr";
import { fetcher } from "../utils";

import Footer from "../components/footer";
import Header from "../components/header";
import Posts from "../components/posts";

import Summary from "../pages/markdown/summary.mdx";

import globalStyles from "../styles/global.js";
import containerStyles from "../styles/container.js";
import summaryStyles from "../styles/summary.js";

const IndexPage = (): JSX.Element => {
    const { data, error } = useSWR("/api/fake_api", fetcher, {
        refreshInterval: 0,
    });

    console.table({ data, error });

    return (
        <React.Fragment>
            <style jsx global>
                {globalStyles}
            </style>

            <style jsx>{containerStyles}</style>
            <style jsx>{summaryStyles}</style>

            <Header />

            <main>
                <div className="container">
                    <div className="summary">
                        <Summary />
                    </div>

                    <Posts />
                </div>
            </main>

            <Footer />
        </React.Fragment>
    );
};

export default IndexPage;
