import { useState } from "react";
import {
  Swrapper,
  Stitle,
  TablesContainer
} from "./NewExpensePage.styled";
import NewExpenseForm from "../components/NewExpenseForm/NewExpenseForm";
import {
  postTransaction
} from "../services/api";
import { EXPENSE_CATEGORIES } from "../constants/categories";

function NewExpensePage() {
  const [isAdding, setIsAdding] = useState(false);

  const getToken = () => localStorage.getItem("tokenAuth");

  const onAddTransaction = async (transactionData) => {
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

      await postTransaction({
        token: getToken(),
        transaction: newTransaction,
      });

      // После успешного добавления перенаправляем на главную страницу
      window.location.href = '/';
    } catch (error) {
      console.error("Ошибка при добавлении транзакции:", error);
      alert("Ошибка при добавлении транзакции");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Swrapper>
      <Stitle>Новый расход</Stitle>
      <TablesContainer>
        <NewExpenseForm
          onSubmit={onAddTransaction}
          isSubmitting={isAdding}
        />
      </TablesContainer>
    </Swrapper>
  );
}

export default NewExpensePage;
 
 
  
   
// import { useState, useEffect } from "react";
// import {
//   Swrapper,
//   Stitle,
//   TablesContainer
// } from "./NewExpensePage.styled";
// import NewExpenseForm from "../components/NewExpenseForm/NewExpenseForm";
// import {
//   postTransaction
// } from "../services/api";
// import { EXPENSE_CATEGORIES } from "../constants/categories";

// function NewExpensePage() {
//   const [isAdding, setIsAdding] = useState(false);

//   const getToken = () => localStorage.getItem("tokenAuth");

//   const onAddTransaction = async (transactionData) => {
//     setIsAdding(true);
//     try {
//       let dateForApi = new Date();
//       if (transactionData.date) {
//         const date = new Date(transactionData.date);
//         if (!isNaN(date.getTime())) {
//           const month = date.getMonth() + 1;
//           const day = date.getDate();
//           const year = date.getFullYear();
//           dateForApi = `${month}-${day}-${year}`;
//         } else {
//           console.error("Некорректная дата:", transactionData.date);
//         }
//       }

//       const categoryForApi = EXPENSE_CATEGORIES.find(
//         (cat) => cat.name === transactionData.category,
//       );

//       const newTransaction = {
//         description: transactionData.description,
//         category: categoryForApi.nameEn,
//         date: dateForApi,
//         sum: parseFloat(transactionData.amount),
//       };

//       await postTransaction({
//         token: getToken(),
//         transaction: newTransaction,
//       });

//       // После успешного добавления можно перенаправить на главную
//       // window.location.href = '/';
//     } catch (error) {
//       console.error("Ошибка при добавлении транзакции:", error);
//       alert("Ошибка при добавлении транзакции");
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   return (
//     <Swrapper>
//       <Stitle>Новый расход</Stitle>
//       <TablesContainer>
//         <NewExpenseForm
//           onSubmit={onAddTransaction}
//           isSubmitting={isAdding}
//         />
//       </TablesContainer>
//     </Swrapper>
//   );
// }

// export default NewExpensePage;