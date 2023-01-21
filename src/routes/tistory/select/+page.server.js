import { error } from "@sveltejs/kit";
const tistory_client = import.meta.env.VITE_TISTORY_APP_KEY;
const tistory_secret = import.meta.env.VITE_TISTORY_SECRET_KEY;
const redirect_uri = import.meta.env.VITE_TISTORY_REDIRECT_URL;
const state = import.meta.env.VITE_TISTORY_STATE;
    

/**@type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    if (url.searchParams.get("state") === state) {
        const access_token = await fetch(`https://www.tistory.com/oauth/access_token?client_id=${tistory_client}&client_secret=${tistory_secret}&redirect_uri=${redirect_uri}&code=${url.searchParams.get("code")}&grant_type=authorization_code`);
        const response_string = await access_token.text();
        const response_array = response_string.split(/=|&/);

        if (response_string.startsWith("error")) {
            throw error(400, `Error Occured: ${response_array[1].replaceAll("_", " ")}, ${response_array[3].replaceAll("_", " ")}`);
        }

        const getBlogData = await fetch(`https://www.tistory.com/apis/blog/info?access_token=${response_array[1]}&output=json`);
        const convertDataJson = await getBlogData.json();

        return {
            token: `${response_array[1]}`,
            blogs: convertDataJson.tistory.item.blogs
        };
    } else {
        throw error(400, `Unknown source. Source: ${url.searchParams.get("state")}`);
    }
}