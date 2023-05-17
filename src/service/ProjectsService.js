import { $user } from "@service/index"
import { API_ENDPOINT_PROJECTS, API_ROOT_URL } from "@config/api";

export class ProjectsService{

    static get = async (page) => {

        try {
            const res = await $user.get(API_ROOT_URL + API_ENDPOINT_PROJECTS + `/page/${page}`);

            if (res.status === 200 && res.data.status && res.data.body) return res.data
            else return null

        } catch (error) {
            if (!error.response.data.status && error.response.data.body) return error.response.data
            else return { status: false, body: error.response.message }
        }
    }
}