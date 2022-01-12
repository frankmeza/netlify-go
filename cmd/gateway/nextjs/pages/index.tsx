import React from "react";
import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../utils";

import Header from "../components/header";

import globalStyles from "../styles/global.js";
import container from "../styles/container.js";

function Index(): JSX.Element {
    const { data: chuck, error: errorC } = useSWR("/api/chuck", fetcher, {
        refreshInterval: 0,
    });

    return (
        <React.Fragment>
            <style jsx global>
                {globalStyles}
            </style>

            <style jsx>{container}</style>

            <div className="container">
                <Header />

                <h1>Hello, world!</h1>
                <p>
                    This is <code>pages/index.tsx</code>.
                </p>
                <p>
                    Check out <Link href="/foo">foo</Link>.
                </p>

                <h2>We want chuck</h2>
                <pre>{chuck || errorC}</pre>
            </div>
        </React.Fragment>
    );
}

export default Index;
