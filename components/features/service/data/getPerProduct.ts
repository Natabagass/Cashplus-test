import AxiosInstance from "@/features/api/AxiosInstance"
import { getCookie } from "cookies-next"

const getPerProduct = async (id: string | number | string[] | undefined) => {
    const axiosInstance = AxiosInstance()

    try {
        const result = await axiosInstance.get(`product/${id}`)
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

export default getPerProduct;