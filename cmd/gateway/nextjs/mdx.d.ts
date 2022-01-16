// this declaration file fixes issue:
// Typescript show error for .mdx extension file in nextjs
// https://stackoverflow.com/a/67365297

declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
}
