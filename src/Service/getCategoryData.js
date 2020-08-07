import Axios from "../utils/axiosInstance"

export const getCategoryData = (id) => {
    return Axios.get(`/category/${id}`)
}
