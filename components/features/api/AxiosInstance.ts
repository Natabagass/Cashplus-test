import axios from "axios";
import { getCookie } from "cookies-next";

const AxiosInstance = () => {
    const res = axios.create({
        baseURL: 'https://infruit.ruangbaca-fisipedu.my.id/api/',
        headers: {
            'Content-Type': 'application/json,',
        }
    })

    return res
}

export default AxiosInstance;