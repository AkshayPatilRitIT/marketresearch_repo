import Axios from "../utils/axiosInstance"

export const postPaymentDetails = (payload) => {
    console.log("initial start api", payload)
    return Axios.post("/checkout", payload)
}
