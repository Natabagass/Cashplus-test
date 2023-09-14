import axios from "axios";

const AxiosInstance = () => {
    const token = localStorage.getItem('auth')
    const res = axios.create({
        baseURL: 'https://infruit.ruangbaca-fisipedu.my.id/api/',
        headers: {
            'Content-Type': 'application/json,',
            'Authorization': `Bearer ${token}`,
        }
    })

    return res
}

export default AxiosInstance;