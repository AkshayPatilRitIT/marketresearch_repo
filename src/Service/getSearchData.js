import Axios from "../utils/axiosInstance"

export const getSearchData = (payload) => {
    return Axios.get(`/search-repo?search=${payload}`)
}
