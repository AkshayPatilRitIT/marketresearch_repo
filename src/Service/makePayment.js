import Axios from "../utils/axiosInstance"

export const makePayment = () => {

    try {
        return Axios.get(`/api/create-payment/`)
    } catch (error) {
        console.log(error)
    }
}
