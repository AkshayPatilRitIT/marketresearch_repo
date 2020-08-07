import Axios from "../utils/axiosInstance"

export const getLatestReport = () => {
    return Axios.get("/latestreport")
}
