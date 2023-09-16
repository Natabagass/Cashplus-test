import AxiosInstance from "@/features/api/AxiosInstance"
import { getCookie } from "cookies-next"

const getBuah = async () => {
    const axiosInstance = AxiosInstance()
    const token =  getCookie('auth')

    try {
        const result = await axiosInstance.get('product', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

        return result
    } catch (error) {
        console.error(error)
    }
}

export default getBuah;