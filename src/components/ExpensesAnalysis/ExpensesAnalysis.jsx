import Calendar from "../Calendar/Calendar";
import Diagram from "../Diagram/Diagram";
import Header from "../Header/Header";
import { SanalysTitle, Smain, Swrapper } from "./ExpensesAnalysis.styled";
import { temporaryData } from "../../data";
import { useState } from "react";
import { endOfDay, startOfDay } from "date-fns";

const ExpensesAnalysis = () => {
    const [data, setData] = useState(temporaryData); //данные из выбранного диапазона будут по API
    const [startDate, setStartDate] = useState(startOfDay(new Date()));
    const [endDate, setEndDate] = useState(endOfDay(new Date()));
    const setDiapazon = (date1, date2) => {
        let start = null;
        let end = null;
        if (date1 > date2) {
            start = new Date(date2);
            end = new Date(date1);
        } else {
            start = new Date(date1);
            end = new Date(date2);
        }
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        setStartDate(start);
        setEndDate(end);
    };

    let earlyRecord = new Date(data[0].date); //ранняя запись должна быть из полных данных, логичнее по контексту из API
    data.forEach((item) => {
        let currentDate = new Date(item.date);
        if (currentDate < earlyRecord) {
            earlyRecord = currentDate;
        }
    });

    return (
        <Swrapper>
            <Header />
            <Smain>
                <SanalysTitle>Анализ расходов</SanalysTitle>
                <Calendar
                    earlyRecord={earlyRecord}
                    startDate={startDate}
                    endDate={endDate}
                    setDiapazon={setDiapazon}
                />
                <Diagram />
            </Smain>
        </Swrapper>
    );
};

export default ExpensesAnalysis;
