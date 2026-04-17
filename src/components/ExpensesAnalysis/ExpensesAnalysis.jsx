import Calendar from "../Calendar/Calendar";
import Diagram from "../Diagram/Diagram";
import Button from "../button/Button";
import {
    SanalysTitle,
    SbuttonWrapper,
    Smain,
    SsectionWrapper,
    Swrapper,
} from "./ExpensesAnalysis.styled";
// import { temporaryData } from "../../data";
import { useContext, useEffect, useState } from "react";
import { endOfDay, format, startOfDay } from "date-fns";
import { getTransactionsInPeriod, fetchTransactions } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

const ExpensesAnalysis = () => {
    const { token } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); //статус загрузки данных из API
    const [isCalendarLoading, setIsCalendarLoading] = useState(true); //статус загрузки данных из API для календаря, т.е. готовности календаря к отображению
    const [isCalendarError, setIsCalendarError] = useState(""); //статус ошибки при загрузке данных из API для календаря
    const [error, setError] = useState(null); //статус ошибки при загрузке данных из API
    const [partialData, setPartialData] = useState(null); // данные за пределённый период, полученные по запросу из API
    const [startDate, setStartDate] = useState(startOfDay(new Date()));
    const [endDate, setEndDate] = useState(endOfDay(new Date()));
    const [draftStartDate, setDraftStartDate] = useState(
        startOfDay(new Date()),
    ); //черновик начальной даты для ручного выбора диапазона дат в календаре
    const [draftEndDate, setDraftEndDate] = useState(endOfDay(new Date())); //черновик конечной даты для ручного выбора диапазона дат в календаре

    const initialLayout = window.innerWidth < 768 ? "stacked" : "split";
    const [view, setView] = useState(() =>
        initialLayout === "stacked" ? "diagram" : "split",
    );
    const isSplit = view === "split";
    const pickDateMode = isSplit ? "auto" : "manual"; //выбор диапазона автоматически после второго клика или вручную по кнопке "Выбрать период"

    const toggleView = () => {
        if (view === "diagram") {
            setView("calendar");
        } else if (view === "calendar") {
            setView("diagram");
        }
    };

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

    const onDraftChange = (date1, date2) => {
        if (pickDateMode === "auto") {
            setDiapazon(date1, date2);
        } else {
            //в режиме ручного выбора диапазона даты сохраняются в черновике, а при клике на кнопку "Выбрать период" устанавливаются в основной стейт и отправляется запрос на получение данных за этот период
            setDraftStartDate(date1);
            setDraftEndDate(date2);
        }
    };

    const onClickSetDiapazon = () => {
        setDiapazon(draftStartDate, draftEndDate);
        toggleView();
    };

    //получение данных и определение ранней записи для календаря при загрузке страницы
    useEffect(() => {
        setIsCalendarLoading(true);
        const fetchData = fetchTransactions({ token });
        fetchData
            .then((response) => {
                setData(response);
            })
            .catch((e) => {
                if (e.response && e.response.data && e.response.data.error) {
                    setIsCalendarError(e.response.data.error);
                } else {
                    setIsCalendarError(e.message);
                }
            })
            .finally(() => {
                setIsCalendarLoading(false);
            });
    }, []);

    //определение ранней записи для календаря, чтобы пользователь не мог выбрать дату раньше, чем есть в данных, полученных из API  earlyRecord = currentDate;
    const earlyRecord =
        data.length > 0
            ? data.reduce((earliest, current) => {
                  const currentDate = new Date(current.date);
                  return currentDate < earliest ? currentDate : earliest;
              }, new Date(data[0].date))
            : new Date();

    const fetchData = async (period) => {
        try {
            setIsLoading(true);
            setError(null);
            const newData = await getTransactionsInPeriod({
                token,
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
            <Smain>
                {view === "diagram" && (
                    <SanalysTitle>Анализ расходов</SanalysTitle>
                )}
                <SsectionWrapper>
                    {(isSplit || view === "calendar") && (
                        <Calendar
                            earlyRecord={earlyRecord}
                            startDate={startDate}
                            endDate={endDate}
                            isLoading={isCalendarLoading}
                            error={isCalendarError}
                            isSplit={isSplit}
                            toggleView={toggleView}
                            onDraftChange={onDraftChange}
                        />
                    )}
                    {(isSplit || view === "diagram") && (
                        <Diagram
                            data={partialData}
                            isLoading={isLoading}
                            error={error}
                            period={{ start: startDate, end: endDate }}
                        />
                    )}
                </SsectionWrapper>
                {!isSplit && (
                    <SbuttonWrapper>
                        {view === "diagram" ? (
                            <Button
                                onClick={toggleView}
                                text="Выбрать другой период"
                            />
                        ) : (
                            <Button
                                onClick={onClickSetDiapazon}
                                text="Выбрать период"
                            />
                        )}
                    </SbuttonWrapper>
                )}
            </Smain>
        </Swrapper>
    );
};

export default ExpensesAnalysis;
