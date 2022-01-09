const withMdx = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

module.exports = {
    // i wish this worked...
    // When running Next.js via Node.js (e.g. `dev` mode),
    // proxy API requests to the Go server.
    // async rewrites() {
    //     return process.env.NODE_ENV === "development"
    //         ? [
    //               {
    //                   source: "/api/:slug*",
    //                   destination: `http://localhost:3333/api/:slug*`,
    //               },
    //           ]
    //         : [];
    // },
    future: {
        webpack5: true,
    },
    trailingSlash: false,
    withMdx: withMdx({
        pageExtensions: ["js", "jsx", "md", "mdx"],
    }),
    // Prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: true },
    // Support MDX files as pages:
    pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
    // Support loading `.md`, `.mdx`:
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mdx?$/,
            use: [
                // The default `babel-loader` used by Next:
                options.defaultLoaders.babel,
                {
                    loader: "@mdx-js/loader",
                    /** @type {import('@mdx-js/loader').Options} */
                    options: {
                        /* jsxImportSource: …, otherOptions… */
                    },
                },
            ],
        });

        return config;
    },
};
