import AxiosInstance from "@/features/api/AxiosInstance";
import { getCookie } from "cookies-next";

const postBuy = async (bank: string, amount: number, product_id: number) => {
    const token = getCookie('auth')
    const axiosInstance = AxiosInstance()
    try {
        const result = await axiosInstance.post('/product/buy', {
            bank,
            amount,
            product_id
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

        return result
    } catch (err) {
        console.error(err)
    }
}
export default postBuy;