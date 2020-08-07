import Axios from "../utils/axiosInstance"

export const doPayment = (payload) => {
    console.log("payment nonce api final call")
    return Axios.post(`/api/make?amount=${payload.amt}&paymentMethodNonce=${payload.nonce}`)
}
