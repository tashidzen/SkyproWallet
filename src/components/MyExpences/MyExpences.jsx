import React from 'react';
import Header from "../Header/Header";
import { Swrapper, Stitle, TablesContainer } from "./MyExpences.styled";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

function MyExpences() {
  return (
    <Swrapper>
      <Header />
      <Stitle>Мои расходы</Stitle>
      <TablesContainer>
        <ExpenseTable />
        <NewExpenseForm />
      </TablesContainer>
    </Swrapper>
  );
}

export default MyExpences;

 
 
  
    
// import Header from "../Header/Header";
// import { Swrapper, Stitle, TablesContainer } from "./MyExpences.styled";
// import ExpenseTable from "../ExpenseTable/ExpenseTable";
// import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

// function MyExpences() {
//   return (
//     <Swrapper>
//       <Header />
//       <Stitle>Мои расходы</Stitle>
//       <TablesContainer>
//         <ExpenseTable />
//         <NewExpenseForm />
//       </TablesContainer>
//     </Swrapper>
//   );
// }

// export default MyExpences;

 
 
  
   
// import Header from "../Header/Header";
// import { Swrapper, Stitle } from "./MyExpences.styled";
// import ExpenseTable from "../ExpenseTable/ExpenseTable";
// import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

// function MyExpences() {
//     return (
//         <Swrapper>
//             <Header />
//             <Stitle>Мои расходы</Stitle>
//             <ExpenseTable />
//             <NewExpenseForm />
//         </Swrapper>
//     );
// }

// export default MyExpences;
