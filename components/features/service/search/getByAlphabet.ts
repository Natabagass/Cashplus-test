import AxiosInstance from "@/features/api/AxiosInstance";

const getByAlphabet = async (alph: string) => {
    const axiosInstance = AxiosInstance()

    try {
        const result = await axiosInstance.get(`product?alphabet=${alph}`)
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
 
export default getByAlphabet;