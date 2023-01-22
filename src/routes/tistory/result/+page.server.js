import { error } from "@sveltejs/kit";

const state = import.meta.env.VITE_TISTORY_STATE;

/** @type {import("./$types").Actions} */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        if (data.get("state") !== state) {
            throw error(400, "Invalid Request: Origin State Not matched");
        }

        console.log(data);
        
        return {
            token: data.get("token"),
            handle: data.get("blog")
        }
    }
}