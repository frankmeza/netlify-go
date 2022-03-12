import React from "react";

import * as AboutProps from "../pages/blog_content/about.mdx";

import postExcerptStyles from "../styles/posts.js";

// need to make excerpt component for blog summary on index pages

interface MdxProps {
    publishDate: string;
    summary: string;
    tags: string[];
    title: string;
}

interface MdxPropsMap {
    [pageName: string]: MdxProps;
}

const mdxProps: MdxPropsMap = {
    about: {
        publishDate: "", // todo
        summary: AboutProps["summary"],
        tags: [""], // todo
        title: AboutProps["title"],
    },
};

const posts = () => {
    return Object.values(mdxProps).map((mdxProp) => {
        return (
            <li key={mdxProp.title}>
                <style jsx>{postExcerptStyles}</style>
                <p>{mdxProp.tags}</p>
                <h3>{mdxProp.title}</h3>
                <p>{mdxProp.summary}</p>
            </li>
        );
    });
};

const Posts = () => {
    return (
        <React.Fragment>
            <style jsx>{postExcerptStyles}</style>

            <ul>{posts()}</ul>
        </React.Fragment>
    );
};

export default Posts;
