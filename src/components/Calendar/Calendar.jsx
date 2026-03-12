import { useMemo } from "react";
import {
    ScalendarDayName,
    ScalendarDayNames,
    ScalendarHeader,
    ScalendarMounth,
    ScalendarMounthDay,
    ScalendarMounthDays,
    ScalendarMounths,
    ScalendarMounthTitle,
    ScalendarTitle,
    Ssection,
} from "./Calendar.styled";
import {
    endOfMonth,
    endOfWeek,
    isSameMonth,
    startOfMonth,
    startOfWeek,
} from "date-fns";

const Calendar = ({ earlyRecord, startDate, endDate, setDiapazon }) => {
    const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    const monthsName = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    let draftStartDate = startDate;
    let draftEndDate = endDate;

    const handleDayClick = (date) => {
        if (draftEndDate) {
            draftEndDate = null;
            draftStartDate = date;
        } else {
            draftEndDate = date;
            setDiapazon(draftStartDate, draftEndDate);
        }
    };

    const getDays = (month) => {
        const newDays = [];
        const startDay = startOfWeek(month, { weekStartsOn: 1 });
        const endDay = endOfWeek(endOfMonth(month), { weekStartsOn: 1 });
        for (
            let date = new Date(startDay);
            date <= endDay;
            date.setDate(date.getDate() + 1)
        ) {
            newDays.push({
                date: new Date(date),
                isOtherMonth: !isSameMonth(date, month),
            });
        }
        return newDays;
    };

    const months = useMemo(() => {
        const result = [];
        const lastMonth = startOfMonth(new Date());
        let currentMonth = new Date(
            earlyRecord.getFullYear(),
            earlyRecord.getMonth(),
            1,
        );
        while (currentMonth <= lastMonth) {
            result.push({
                month: new Date(currentMonth),
                days: getDays(currentMonth),
            });
            currentMonth = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1,
                1,
            );
        }
        return result;
    }, [earlyRecord]);

    const startTs = draftStartDate?.getTime();
    const endTs = draftEndDate?.getTime();

    return (
        <Ssection>
            <ScalendarHeader>
                <ScalendarTitle>Период</ScalendarTitle>
                <ScalendarDayNames>
                    {dayNames.map((day) => (
                        <ScalendarDayName key={day}>{day}</ScalendarDayName>
                    ))}
                </ScalendarDayNames>
            </ScalendarHeader>
            <ScalendarMounths>
                {months.map((month) => (
                    <ScalendarMounth key={month.month.getTime()}>
                        <ScalendarMounthTitle>
                            {monthsName[month.month.getMonth()] +
                                " " +
                                month.month.getFullYear()}
                        </ScalendarMounthTitle>
                        <ScalendarMounthDays>
                            {month.days.map((day) => (
                                <ScalendarMounthDay
                                    key={day.date.getTime()}
                                    $isOtherMonth={day.isOtherMonth}
                                    $isActive={
                                        day.date.getTime() >= startTs &&
                                        day.date.getTime() <= endTs
                                    }
                                    onClick={() => handleDayClick(day.date)}
                                >
                                    {day.date.getDate()}
                                </ScalendarMounthDay>
                            ))}
                        </ScalendarMounthDays>
                    </ScalendarMounth>
                ))}
            </ScalendarMounths>
        </Ssection>
    );
};

export default Calendar;
