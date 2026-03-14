import Calendar from "../Calendar/Calendar";
import Diagram from "../Diagram/Diagram";
import Header from "../Header/Header";
import { SanalysTitle, Smain, Swrapper } from "./ExpensesAnalysis.styled";
import { temporaryData } from "../../data";
import { useEffect, useState } from "react";
import { endOfDay, format, startOfDay } from "date-fns";
import { getTransactionsInPeriod } from "../../services/api";

const ExpensesAnalysis = () => {
    const [data, setData] = useState(temporaryData); //данные полные будут на входе, наверное из контекста. Либо будет даваться просто начальная дата, т.к. эти данные нужны только для определения размера календаря
    const [isLoading, setIsLoading] = useState(false); //статус загрузки данных из API
    const [error, setError] = useState(null); //статус ошибки при загрузке данных из API
    const [partialData, setPartialData] = useState(null); // данные за пределённый период, полученные по запросу из API
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

    let earlyRecord = new Date(data[0].date); //ранняя запись должна быть из полных данных, логичнее по контексту на основе полных данных, а не из API
    data.forEach((item) => {
        let currentDate = new Date(item.date);
        if (currentDate < earlyRecord) {
            earlyRecord = currentDate;
        }
    });

    const fetchData = async (period) => {
        try {
            setIsLoading(true);
            setError(null);
            const newData = await getTransactionsInPeriod({
                token: "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k",
                period,
            });
            setPartialData(newData);
            console.log("Fetched data:", newData);
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) {
                setError(e.response.data.error);
            } else {
                setError(e.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const period = {
            start: format(new Date(startDate), "M-d-yyyy"),
            end: format(new Date(endDate), "M-d-yyyy"),
        };
        fetchData(period);
    }, [startDate, endDate]);

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
                <Diagram
                    data={partialData}
                    isLoading={isLoading}
                    error={error}
                    period={{ start: startDate, end: endDate }}
                />
            </Smain>
        </Swrapper>
    );
};

export default ExpensesAnalysis;
