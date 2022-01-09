const ENV = process.env.NODE_ENV;
const isDevelopment = ENV === "development";
const LOCAL_SERVER_URL = "http://localhost:3333";

const generateUrlForEnv = (slug: string) => {
    return isDevelopment ? `${LOCAL_SERVER_URL}${slug}` : slug;
};

export async function fetcher(slug: string) {
    const url = generateUrlForEnv(slug);
    const resp = await fetch(url);

    return resp.text();
}
