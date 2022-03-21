import React from "react";
import useSWR from "swr";

import { fetcher } from "../utils";

import Layout from "../components/layout";
import Posts from "../components/posts";

import Summary from "../pages/blog_content/summary.mdx";

import globalStyles from "../styles/global";
import summaryStyles from "../styles/summary";

const getHealthCheck = (data: any, error: any) => {
    if (!!error) {
        return <h3>{error}</h3>;
    } else {
        console.log(data);
    }
};

const IndexPage = (): JSX.Element => {
    const { data, error } = useSWR("/health", fetcher);
    getHealthCheck(data, error);

    return (
        <React.Fragment>
            <style jsx global>
                {globalStyles}
            </style>

            <style jsx>{summaryStyles}</style>

            <Layout>
                <main>
                    <div className="summary">
                        <Summary />
                    </div>

                    <Posts />
                </main>
            </Layout>
        </React.Fragment>
    );
};

export default IndexPage;
