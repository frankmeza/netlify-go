import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

async function fetcher(url: string) {
    const resp = await fetch(url);
    return resp.text();
}

function Index(): JSX.Element {
    const [dataState, setDataState] = useState("");
    const [chuckState, setChuckState] = useState("");

    const { data, error } = useSWR("/api/feed", fetcher, {
        refreshInterval: 1000,
    });

    setDataState(data);

    const { data: chuck, error: errorC } = useSWR("/api/chuck", fetcher, {
        refreshInterval: 0,
    });

    setChuckState(chuck);

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
            <pre>{dataState}</pre>
            <pre>{chuckState}</pre>
        </div>
    );
}

export default Index;
