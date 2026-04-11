import { Swrapper, Stitle, TablesContainer } from "./MyExpences.styled";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

function MyExpences() {
  return (
    <Swrapper>
      <Stitle>Мои расходы</Stitle>
      <TablesContainer>
        <ExpenseTable />
        <NewExpenseForm />
      </TablesContainer>
    </Swrapper>
  );
}

export default MyExpences;