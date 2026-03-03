import Calendar from "../Calendar/Calendar";
import Header from "../Header/Header";
import { SanalysTitle, Smain, Swrapper } from "./ExpensesAnalysis.styled";

function ExpensesAnalysis() {
    return (
        <Swrapper>
            <Header />
            <Smain>
                <SanalysTitle>Анализ расходов</SanalysTitle>
                <Calendar />
            </Smain>
        </Swrapper>
    );
}

export default ExpensesAnalysis;
