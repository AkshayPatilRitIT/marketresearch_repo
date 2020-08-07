import Axios from "../utils/axiosInstance"

export const storeSampleRequestData = (payload) => {
    return Axios.post("/addcustomize-request", payload)
}
