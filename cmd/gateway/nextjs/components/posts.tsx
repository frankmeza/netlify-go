import React from "react";

import About from "../pages/markdown/about.mdx";

// need to make excerpt component for blog summary on index pages

const postsArray = [<About />];

// debugger //

const Posts = () => {
    return <React.Fragment>{postsArray}</React.Fragment>;
};

export default Posts;
