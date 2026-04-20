import {
    Swrapper,
    Stitle,
    SmobileTitle,
    SNewExpenseFormLink,
    TablesContainer,
} from "./MyExpences.styled";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import {
    fetchTransactions,
    postTransaction,
    deleteTransaction,
} from "../../services/api";
import { useState, useEffect } from "react";
import { EXPENSE_CATEGORIES } from "../../constants/categories";
import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../button/Button";

function MyExpences() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const getToken = () => localStorage.getItem("tokenAuth");

    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isTableOpen, setIsTableOpen] = useState(false);

    // Получение списка транзакций
    const getAllTransactions = async () => {
        setLoading(true);
        try {
            const allTransactions = await fetchTransactions({
                token: getToken(),
            });
            setTransactions(allTransactions);
        } catch (error) {
            console.error("Ошибка при загрузке задач:", error);
            alert("Ошибка при загрузке задач");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllTransactions();
    }, []);

    // Добавление новой задачи
    const addTransaction = async (transactionData) => {
        setIsAdding(true);
        try {
            // Преобразуем выбранную дату в формат для API
            let dateForApi = new Date();
            if (transactionData.date) {
                const date = new Date(transactionData.date);
                if (!isNaN(date.getTime())) {
                    const month = date.getMonth() + 1;
                    const day = date.getDate();
                    const year = date.getFullYear();
                    dateForApi = `${month}-${day}-${year}`;
                } else {
                    console.error("Некорректная дата:", transactionData.date);
                }
            }

            // Преобразуем выбранную категорию в формат для API
            const categoryForApi = EXPENSE_CATEGORIES.find(
                (cat) => cat.name === transactionData.category,
            );

            const newTransaction = {
                description: transactionData.description,
                category: categoryForApi.nameEn,
                date: dateForApi,
                sum: parseFloat(transactionData.amount),
            };
            console.log("Отправляем:", newTransaction);

            const updatedTransaction = await postTransaction({
                token: getToken(),
                transaction: newTransaction,
            });
            console.log("Ответ от сервера:", updatedTransaction);
            setTransactions(updatedTransaction.transactions);
        } catch (error) {
            console.error("Ошибка при добавлении транзакции:", error);
            alert("Ошибка при добавлении транзакции");
        } finally {
            setIsAdding(false);
        }
    };

    const onAddTransaction = async (transactionData) => {
        // функция валидации полей формы добавления
        const validateFields = () => {
            if (
                typeof transactionData.description !== "string" ||
                !transactionData.description ||
                transactionData.description.trim() === "" ||
                transactionData.description.length < 4
            ) {
                alert(
                    "Пожалуйста, заполните описание. Введите не менее 4 символов.",
                );
                return false;
            }
            if (/^\d+$/.test(transactionData.description.trim())) {
                alert(
                    "Описание не может состоять только из цифр. Добавьте буквы.",
                );
                return false;
            }

            if (!transactionData.category) {
                alert("Пожалуйста, выберите категорию.");
                return false;
            }

            if (!transactionData.date) {
                alert("Пожалуйста, выберите дату транзакции");
                return false;
            }

            if (
                !transactionData.amount ||
                String(transactionData.amount).trim() === "" ||
                isNaN(parseFloat(transactionData.amount)) ||
                parseFloat(transactionData.amount) <= 0 ||
                parseFloat(transactionData.amount) !==
                    Math.floor(parseFloat(transactionData.amount)) || // проверка, что число целое
                transactionData.amount <= 0
            ) {
                alert(
                    "Пожалуйста, введите сумму транзакции. Сумма должна быть целым положительным числом.",
                );
                return false;
            }
            return true;
        };

        if (!validateFields()) {
            return;
        }

        await addTransaction(transactionData);
    };

    //Удаление транзакции
    const delTransaction = async (id) => {
        try {
            await deleteTransaction({
                token: getToken(),
                id: id,
            });

            const newTransactions = transactions.filter(
                (trans) => trans._id !== id,
            );
            setTransactions(newTransactions);
        } catch (error) {
            console.error("Ошибка при удалении транзакции:", error);
            alert("Ошибка при удалении транзакции");
        }
    };

    return (
        <Swrapper>
            {!isMobile ? (
                <>
                    <Stitle>Мои расходы</Stitle>
                    <TablesContainer>
                        <ExpenseTable
                            transactions={transactions}
                            onDelete={delTransaction}
                            loading={loading}
                        />
                        <NewExpenseForm
                            onSubmit={onAddTransaction}
                            isSubmitting={isAdding}
                        />
                    </TablesContainer>
                </>
            ) : !isFormOpen ? (
                <>
                    <SmobileTitle>
                        <Stitle>Мои расходы</Stitle>
                        <SNewExpenseFormLink
                            href="#"
                            onClick={() =>
                                setIsFormOpen(true) && setIsTableOpen(false)
                            }
                        >
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.83333 0C2.61917 0 0 2.61917 0 5.83333C0 9.0475 2.61917 11.6667 5.83333 11.6667C9.0475 11.6667 11.6667 9.0475 11.6667 5.83333C11.6667 2.61917 9.0475 0 5.83333 0ZM8.16667 6.27083H6.27083V8.16667C6.27083 8.40583 6.0725 8.60417 5.83333 8.60417C5.59417 8.60417 5.39583 8.40583 5.39583 8.16667V6.27083H3.5C3.26083 6.27083 3.0625 6.0725 3.0625 5.83333C3.0625 5.59417 3.26083 5.39583 3.5 5.39583H5.39583V3.5C5.39583 3.26083 5.59417 3.0625 5.83333 3.0625C6.0725 3.0625 6.27083 3.26083 6.27083 3.5V5.39583H8.16667C8.40583 5.39583 8.60417 5.59417 8.60417 5.83333C8.60417 6.0725 8.40583 6.27083 8.16667 6.27083Z"
                                    fill="black"
                                />
                            </svg>
                            Новый расход
                        </SNewExpenseFormLink>
                    </SmobileTitle>

                    <ExpenseTable
                        transactions={transactions}
                        onDelete={delTransaction}
                        loading={loading}
                    />
                </>
            ) : (
                <>
                    <SmobileTitle style={{ marginLeft: "16px" }}>
                        <Stitle style={{ display: "none" }}>Мои расходы</Stitle>
                        <SNewExpenseFormLink
                            href="#"
                            onClick={() => setIsFormOpen(false)}
                            style={{ color: "#999999" }}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.44425 1.16675H4.55591C2.43258 1.16675 1.16675 2.43258 1.16675 4.55591V9.43841C1.16675 11.5676 2.43258 12.8334 4.55591 12.8334H9.43841C11.5617 12.8334 12.8276 11.5676 12.8276 9.44425V4.55591C12.8334 2.43258 11.5676 1.16675 9.44425 1.16675ZM10.5001 7.43758H4.55591L6.31175 9.19341C6.48091 9.36258 6.48091 9.64258 6.31175 9.81175C6.22425 9.89925 6.11341 9.94008 6.00258 9.94008C5.89175 9.94008 5.78091 9.89925 5.69341 9.81175L3.19091 7.30925C3.10925 7.22758 3.06258 7.11675 3.06258 7.00008C3.06258 6.88341 3.10925 6.77258 3.19091 6.69091L5.69341 4.18841C5.86258 4.01925 6.14258 4.01925 6.31175 4.18841C6.48091 4.35758 6.48091 4.63758 6.31175 4.80675L4.55591 6.56258H10.5001C10.7392 6.56258 10.9376 6.76091 10.9376 7.00008C10.9376 7.23925 10.7392 7.43758 10.5001 7.43758Z"
                                    fill="#999999"
                                />
                            </svg>
                            Мои расходы
                        </SNewExpenseFormLink>
                    </SmobileTitle>
                    <NewExpenseForm
                        onSubmit={onAddTransaction}
                        isSubmitting={isAdding}
                    />
                </>
            )}
        </Swrapper>
    );
}

export default MyExpences;
