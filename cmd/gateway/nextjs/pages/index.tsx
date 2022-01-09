import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../utils";

function Index(): JSX.Element {
    const { data: chuck, error: errorC } = useSWR("/api/chuck", fetcher, {
        refreshInterval: 0,
    });

    return (
        <div>
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
    );
}

export default Index;
