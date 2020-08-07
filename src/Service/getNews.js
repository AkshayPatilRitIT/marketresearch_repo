import Axios from "../utils/axiosInstance"

export const getNews = (payload) => {

    return Axios.get(`/news/${payload}`)
}
