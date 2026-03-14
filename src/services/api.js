import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/transactions";

//функция получения данных из API в определённом периоде
export async function getTransactionsInPeriod({ token, period }) {
    try {
        const response = await axios.post(API_URL + "/period", period, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "text/html",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching transactions in period:", error);
        throw error;
    }
}
