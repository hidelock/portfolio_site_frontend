import { $user } from "@service/index"
import { API_ENDPOINT_ORDERS, API_ROOT_URL } from "@config/api";

export class OrdersService {

    static post = async (name, telegram, description, element, jabber, term) => {

        try {
            const res = await $user.post(API_ROOT_URL + API_ENDPOINT_ORDERS, {
                name: name,
                telegram: telegram,
                description: description,
                element: element,
                jabber: jabber,
                term: term
            });

            if (res.status === 200 && res.data.status && res.data.body) return res.data
            else return null

        } catch (error) {
            if (!error.response.data.status && error.response.data.body) return error.response.data
            else return { status: false, body: error.response.message }
        }
    }
}