import Axios from "../utils/axiosInstance"

export const getCategory = () => {
    return Axios.get("/category-list")
}
