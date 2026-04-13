import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/transactions";

// Получить список транзакций
export async function fetchTransactions({ token }) {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Добавить транзакцию
export async function postTransaction({ token, transaction }) {
    try {
        const response = await axios.post(API_URL, transaction, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "text/html",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Удалить транзакцию
export async function deleteTransaction({ token, id }) {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "text",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Раскомментировать на случай добавления кнопки редактирования.
// Изменить транзакцию. 
// export async function editTransaction({ token, id, transaction }) {
//     try {
//         const response = await axios.patch(`${API_URL}/${id}`, transaction, {
//             headers: {
//                 Authorization: "Bearer " + token,
//                 "Content-Type": "text/html",
//             },
//         });
//         return response.data;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }

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
