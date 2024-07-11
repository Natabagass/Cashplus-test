import AxiosInstance from "@/features/api/AxiosInstance";
import { getCookie } from "cookies-next";
const postCart = async (amount: number, bank: string, product_id: number[]) => {
    const token = getCookie('auth')
    const axiosInstance = AxiosInstance()
    try {
        const result = await axiosInstance.post('/product/buy-bulk', {
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
export default postCart;
