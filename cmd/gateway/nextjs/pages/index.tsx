import React from "react";
import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../utils";

import Header from "../components/header";
import Footer from "../components/footer";

import globalStyles from "../styles/global.js";
import containerStyles from "../styles/container.js";

const IndexPage = (): JSX.Element => {
    return (
        <React.Fragment>
            <style jsx global>
                {globalStyles}
            </style>
            <style jsx>{containerStyles}</style>

            <Header />
            <main>
                <div className="container"></div>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default IndexPage;
