import Axios from "../utils/axiosInstance"

export const getLatestNews = () => {
    return Axios.get("/latestnews")
}
