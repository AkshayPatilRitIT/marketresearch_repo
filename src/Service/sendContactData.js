import Axios from "../utils/axiosInstance"

export const sendContactData = (payload) => {

    return Axios.post("/countactus", payload)
}
