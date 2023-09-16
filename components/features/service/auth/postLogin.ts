import AxiosInstance from "@/features/api/AxiosInstance"

const postLogin = async (username: string, password: string) => {
    const axiosInstance = AxiosInstance()
    try {
        const result = await axiosInstance.post('login', {
            username,
            password
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

export default postLogin;