import Axios from "../utils/axiosInstance"

export const storeInqueryData = (payload) => {
    return Axios.post("/addinquiry", payload)
}
