import Calendar from "../Calendar/Calendar";
import Diagram from "../Diagram/Diagram";
import Header from "../Header/Header";
import { SanalysTitle, Smain, Swrapper } from "./ExpensesAnalysis.styled";

function ExpensesAnalysis() {
    return (
        <Swrapper>
            <Header />
            <Smain>
                <SanalysTitle>Анализ расходов</SanalysTitle>
                <Calendar />
                <Diagram />
            </Smain>
        </Swrapper>
    );
}

export default ExpensesAnalysis;
