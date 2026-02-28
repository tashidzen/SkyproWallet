import Header from "../Header/Header";
import { Swrapper, Stitle } from "./MyExpences.styled";
import { Outlet } from "react-router-dom";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

function MyExpences() {
    return (
        <>
            <Swrapper>
                <Header />
                <Stitle>Мои расходы</Stitle>
                <ExpenseTable />
                <NewExpenseForm />
                <Outlet />
            </Swrapper>

            <script src="js/script.js"></script>
        </>
    );
}

export default MyExpences;
