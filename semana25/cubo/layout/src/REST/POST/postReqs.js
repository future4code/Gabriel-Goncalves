import axios from "axios";
import { URL } from "../../BASE-URL/BASE-URL"

export const createInvestor = (body, clear) => {
    axios.post(`${URL}/investors/create`, body)
    .then(clear())
    .catch((error) => {
        alert(error.message)
    })
}