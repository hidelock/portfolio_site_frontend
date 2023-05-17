import { $user } from "@service/index"
import { API_ENDPOINT_CHAT, API_ROOT_URL } from "@config/api";

export class ChatService {

    static post = async (input) => {
        try {

            const res = await $user.post(API_ROOT_URL + API_ENDPOINT_CHAT, { content: input });

            if (res.status === 200 && res.data.status && res.data.body) return res.data
            else return null

        } catch (error) {
            console.log(error)
            if (!error.response.data.status && error.response.data.body) return error.response.data
            else return { status: false, body: error.response.message }
        }
    }
}