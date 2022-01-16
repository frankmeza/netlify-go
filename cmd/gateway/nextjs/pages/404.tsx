import React from "react";

import Layout from "../components/layout";

import notFoundStyles from "../styles/404.js";

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="not_found_wrapper">
                <h1>OOPS..</h1>
                <p>404 Page not found</p>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
