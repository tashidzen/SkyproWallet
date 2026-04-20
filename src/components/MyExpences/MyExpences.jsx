import { useState, useEffect } from "react";
import {
  Swrapper,
  Stitle,
  TablesContainer
} from "./MyExpences.styled";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import {
  fetchTransactions,
  postTransaction,
  deleteTransaction,
} from "../../services/api";
import { EXPENSE_CATEGORIES } from "../../constants/categories";

function MyExpences() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const getToken = () => localStorage.getItem("tokenAuth");

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

      const categoryForApi = EXPENSE_CATEGORIES.find(
        (cat) => cat.name === transactionData.category,
      );

      const newTransaction = {
        description: transactionData.description,
        category: categoryForApi.nameEn,
        date: dateForApi,
        sum: parseFloat(transactionData.amount),
      };

      const updatedTransaction = await postTransaction({
        token: getToken(),
        transaction: newTransaction,
      });

      setTransactions(updatedTransaction.transactions);
    } catch (error) {
      console.error("Ошибка при добавлении транзакции:", error);
      alert("Ошибка при добавлении транзакции");
    } finally {
      setIsAdding(false);
    }
  };

  const onAddTransaction = async (transactionData) => {
    const validateFields = () => {
      if (
        typeof transactionData.description !== "string" ||
        !transactionData.description ||
        transactionData.description.trim() === "" ||
        transactionData.description.length < 4
      ) {
        alert("Пожалуйста, заполните описание. Введите не менее 4 символов.");
        return false;
      }
      if (/^\d+$/.test(transactionData.description.trim())) {
        alert("Описание не может состоять только из цифр. Добавьте буквы.");
        return false;
      }

      if (!transactionData.category) {
        alert("Пожалуйста, выберите категорию.");
        return false;
      }

      if (!transactionData.date) {
        alert("Пожалуйста, укажите дату.");
        return false;
      }

      if (
        !transactionData.amount ||
        isNaN(parseFloat(transactionData.amount)) ||
        parseFloat(transactionData.amount) <= 0
      ) {
        alert("Пожалуйста, введите корректную сумму (больше нуля).");
        return false;
      }

      return true;
    };

    if (!validateFields()) {
      return;
    }

    await addTransaction(transactionData);
  };

  const delTransaction = async (id) => {
    try {
      await deleteTransaction({
        token: getToken(),
        id: id,
      });
      getAllTransactions(); // Обновляем список после удаления
    } catch (error) {
      console.error("Ошибка при удалении транзакции:", error);
      alert("Ошибка при удалении транзакции");
    }
  };

  return (
    <Swrapper>
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
    </Swrapper>
  );
}

export default MyExpences;
 
 
  
   
// import { Swrapper, Stitle, TablesContainer } from "./MyExpences.styled";
// import ExpenseTable from "../ExpenseTable/ExpenseTable";
// import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
// import {
//     fetchTransactions,
//     postTransaction,
//     deleteTransaction,
// } from "../../services/api";
// import { useState, useEffect } from "react";
// import { EXPENSE_CATEGORIES } from "../../constants/categories";

// function MyExpences() {
//     const [transactions, setTransactions] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [isAdding, setIsAdding] = useState(false);

//     console.log(localStorage.getItem("user")); // проверить, что передаётся в user,
//     //  если потребуется заменить tokenAuth на token после слития API авторизации
//     const getToken = () => localStorage.getItem("tokenAuth");

//     // Получение списка транзакций
//     const getAllTransactions = async () => {
//         setLoading(true);
//         try {
//             const allTransactions = await fetchTransactions({
//                 token: getToken(),
//             });
//             setTransactions(allTransactions);
//         } catch (error) {
//             console.error("Ошибка при загрузке задач:", error);
//             alert("Ошибка при загрузке задач");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getAllTransactions();
//     }, []);

//     // Добавление новой задачи
//     const addTransaction = async (transactionData) => {
//         setIsAdding(true);
//         try {
//             // Преобразуем выбранную дату в формат для API
//             let dateForApi = new Date();
//             if (transactionData.date) {
//                 const date = new Date(transactionData.date);
//                 if (!isNaN(date.getTime())) {
//                     const month = date.getMonth() + 1;
//                     const day = date.getDate();
//                     const year = date.getFullYear();
//                     dateForApi = `${month}-${day}-${year}`;
//                 } else {
//                     console.error("Некорректная дата:", transactionData.date);
//                 }
//             }

//             // Преобразуем выбранную категорию в формат для API
//             const categoryForApi = EXPENSE_CATEGORIES.find(
//                 (cat) => cat.name === transactionData.category,
//             );

//             const newTransaction = {
//                 description: transactionData.description,
//                 category: categoryForApi.nameEn,
//                 date: dateForApi,
//                 sum: parseFloat(transactionData.amount),
//             };
//             console.log("Отправляем:", newTransaction);

//             const updatedTransaction = await postTransaction({
//                 token: getToken(),
//                 transaction: newTransaction,
//             });
//             console.log("Ответ от сервера:", updatedTransaction);
//             setTransactions(updatedTransaction.transactions);
//         } catch (error) {
//             console.error("Ошибка при добавлении транзакции:", error);
//             alert("Ошибка при добавлении транзакции");
//         } finally {
//             setIsAdding(false);
//         }
//     };

//     const onAddTransaction = async (transactionData) => {
//         // функция валидации полей формы добавления
//         const validateFields = () => {
//             if (
//                 typeof transactionData.description !== "string" ||
//                 !transactionData.description ||
//                 transactionData.description.trim() === "" ||
//                 transactionData.description.length < 4
//             ) {
//                 alert(
//                     "Пожалуйста, заполните описание. Введите не менее 4 символов.",
//                 );
//                 return false;
//             }
//             if (/^\d+$/.test(transactionData.description.trim())) {
//                 alert(
//                     "Описание не может состоять только из цифр. Добавьте буквы.",
//                 );
//                 return false;
//             }

//             if (!transactionData.category) {
//                 alert("Пожалуйста, выберите категорию.");
//                 return false;
//             }

//             if (!transactionData.date) {
//                 alert("Пожалуйста, выберите дату транзакции");
//                 return false;
//             }

//             if (
//                 !transactionData.amount ||
//                 String(transactionData.amount).trim() === "" ||
//                 isNaN(parseFloat(transactionData.amount)) ||
//                 parseFloat(transactionData.amount) <= 0 ||
//                 parseFloat(transactionData.amount) !==
//                     Math.floor(parseFloat(transactionData.amount)) || // проверка, что число целое
//                 transactionData.amount <= 0
//             ) {
//                 alert(
//                     "Пожалуйста, введите сумму транзакции. Сумма должна быть целым положительным числом.",
//                 );
//                 return false;
//             }
//             return true;
//         };

//         if (!validateFields()) {
//             return;
//         }

//         await addTransaction(transactionData);
//     };

//     //Удаление транзакции
//     const delTransaction = async (id) => {
//         try {
//             await deleteTransaction({
//                 token: getToken(),
//                 id: id,
//             });

//             const newTransactions = transactions.filter(
//                 (trans) => trans._id !== id,
//             );
//             setTransactions(newTransactions);
//         } catch (error) {
//             console.error("Ошибка при удалении транзакции:", error);
//             alert("Ошибка при удалении транзакции");
//         }
//     };

//     return (
//         <Swrapper>
//             <Stitle>Мои расходы</Stitle>
//             <TablesContainer>
//                 <ExpenseTable
//                     transactions={transactions}
//                     onDelete={delTransaction}
//                     loading={loading}
//                 />
//                 <NewExpenseForm
//                     onSubmit={onAddTransaction}
//                     isSubmitting={isAdding}
//                 />
//             </TablesContainer>
//         </Swrapper>
//     );
// }

// export default MyExpences;
