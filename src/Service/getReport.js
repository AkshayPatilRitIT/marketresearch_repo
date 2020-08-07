import Axios from "../utils/axiosInstance"

export const getReport = (payload) => {

    return Axios.get(`/report/${payload}`)
}
