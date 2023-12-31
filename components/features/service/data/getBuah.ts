import AxiosInstance from "@/features/api/AxiosInstance"
import { getCookie } from "cookies-next"

const getBuah = async () => {
    const axiosInstance = AxiosInstance()

    try {
        const result = await axiosInstance.get('product' )
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