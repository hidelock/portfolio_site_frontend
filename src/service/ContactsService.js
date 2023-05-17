import { $user } from "@service/index"
import { API_ENDPOINT_CONTACTS, API_ROOT_URL } from "@config/api";

export class ContactsService {

    static get = async (text) => {

        try {
            const res = await $user.get(API_ROOT_URL + API_ENDPOINT_CONTACTS);

            if (res.status === 200 && res.data.status && res.data.body) return res.data
            else return null

        } catch (error) {
            if (!error.response.data.status && error.response.data.body) return error.response.data
            else return { status: false, body: error.response.message }
        }
    }
}