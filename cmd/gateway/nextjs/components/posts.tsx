import React from "react";

import * as AboutProps from "../pages/blog_content/about.mdx";

import postExcerptStyles from "../styles/posts.js";

interface MdxProps {
    publishDate: string;
    summary: string;
    tags: string[];
    timeToRead: string;
    title: string;
}

interface MdxPropsMap {
    [pageName: string]: MdxProps;
}

const mdxProps: MdxPropsMap = {
    about: {
        publishDate: "August 24, 2021", // todo
        summary: AboutProps["summary"],
        tags: AboutProps["tags"],
        timeToRead: AboutProps["timeToRead"] || "1 min",
        title: AboutProps["title"],
    },
};

const displayPostExcerpts = () => {
    return Object.values(mdxProps).map((mdxProp) => {
        return (
            <li key={mdxProp.title}>
                <style jsx>{postExcerptStyles}</style>
                <div>
                    {mdxProp.tags.map((tag) => {
                        return (
                            <a
                                className="post-excerpt-tag"
                                href="#"
                                onClick={() =>
                                    alert("add tags page and link from here")
                                }
                            >
                                {tag}
                            </a>
                        );
                    })}
                </div>
                <h3>{mdxProp.title}</h3>
                <p>{mdxProp.summary}</p>
                <div className="post-excerpt-bottom-row">
                    <span>{mdxProp.publishDate}</span>
                    <span>{mdxProp.timeToRead}</span>
                </div>
            </li>
        );
    });
};

const Posts = () => {
    return (
        <React.Fragment>
            <style jsx>{postExcerptStyles}</style>

            <ul>{displayPostExcerpts()}</ul>
        </React.Fragment>
    );
};

export default Posts;
