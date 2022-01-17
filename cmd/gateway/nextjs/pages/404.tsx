import React from "react";

import Layout from "../components/layout";

import notFoundStyles from "../styles/404.js";

const NotFoundPage = () => {
    return (
        <Layout>
            <React.Fragment>
                <style jsx global>
                    {notFoundStyles}
                </style>

                <div className="not_found_wrapper">
                    <h1>OOPS..</h1>
                    <p>404 Page not found</p>
                </div>
            </React.Fragment>
        </Layout>
    );
};

export default NotFoundPage;
