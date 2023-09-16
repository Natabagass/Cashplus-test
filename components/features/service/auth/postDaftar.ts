import AxiosInstance from "@/features/api/AxiosInstance"

const postSignup = async (username: string, password: string, phone: string, email: string) => {
    const axiosInstance = AxiosInstance()
    try {
        const result = await axiosInstance.post('/register', {
            username,
            password,
            email,
            phone
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

export default postSignup;