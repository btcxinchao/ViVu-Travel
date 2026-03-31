import axios from "axios";

async function CustomApi({ Url, method = 'GET', data = {}, params = {}, headers = {} }) {
    try {
        const res = await axios({
            url: "http://localhost:5000" + Url,
            method,
            data,
            params,
            headers,
        });
        return res.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}

export default CustomApi;