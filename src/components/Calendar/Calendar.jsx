import { useEffect, useMemo, useState } from "react";
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
    const [hoverDate, setHoverDate] = useState(null);
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

    const [draftStartDate, setDraftStartDate] = useState(startDate);
    const [draftEndDate, setDraftEndDate] = useState(endDate);
    const handleDayClick = (date) => {
        if (draftEndDate) {
            setDraftEndDate(null);
            setDraftStartDate(date);
        } else {
            setDraftEndDate(date);
            setHoverDate(null);
            setDiapazon(draftStartDate, date);
        }
    };

    useEffect(() => {
        setDraftStartDate(startDate);
        setDraftEndDate(endDate);
    }, [startDate, endDate]);

    const handleDayHover = (date) => {
        if (draftEndDate == null && hoverDate?.getTime() !== date.getTime())
            setHoverDate(date);
    };

    const handleDayHoverOut = () => {
        setHoverDate(null);
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
                gridStart: startOfWeek(startOfMonth(currentMonth), {
                    weekStartsOn: 1,
                }).getTime(),
                gridEnd: endOfWeek(endOfMonth(currentMonth), {
                    weekStartsOn: 1,
                }).getTime(),
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
    const hoverTs = hoverDate?.getTime();

    let rangeStart = null;
    let rangeEnd = null;
    if (startTs != null && endTs != null) {
        rangeStart = startTs;
        rangeEnd = endTs;
    } else if (startTs != null && hoverTs != null && endTs == null) {
        rangeStart = Math.min(startTs, hoverTs);
        rangeEnd = Math.max(startTs, hoverTs);
    }

    const isInRange = (date) => {
        const time = date.getTime();
        if (startTs == null) return false;
        if (endTs == null && hoverTs == null) {
            return time === startTs;
        }
        return time >= rangeStart && time <= rangeEnd;
    };

    const isMonthInRange = (month) => {
        const monthStart = month.gridStart;
        const monthEnd = month.gridEnd;

        if (startTs == null) return "OUTSIDE";
        if (endTs == null && hoverTs == null) {
            if (monthStart <= startTs && monthEnd >= startTs) return "PARTIAL";
            else return "OUTSIDE";
        }
        if (monthEnd < rangeStart || monthStart > rangeEnd) return "OUTSIDE";
        else if (monthStart >= rangeStart && monthEnd <= rangeEnd)
            return "INSIDE";
        else return "PARTIAL";
    };

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
            <ScalendarMounths onMouseLeave={handleDayHoverOut}>
                {months.map((month) => {
                    const monthState = isMonthInRange(month);
                    return (
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
                                            monthState === "PARTIAL"
                                                ? isInRange(day.date)
                                                : monthState === "INSIDE"
                                                  ? true
                                                  : false
                                        }
                                        onClick={() => handleDayClick(day.date)}
                                        onMouseEnter={() =>
                                            handleDayHover(day.date)
                                        }
                                    >
                                        {day.date.getDate()}
                                    </ScalendarMounthDay>
                                ))}
                            </ScalendarMounthDays>
                        </ScalendarMounth>
                    );
                })}
            </ScalendarMounths>
        </Ssection>
    );
};

export default Calendar;
