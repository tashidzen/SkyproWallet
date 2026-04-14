import { useEffect, useMemo, useState } from "react";
import {
    SCalendarDayName,
    SCalendarDayNames,
    SCalendarHeader,
    SCalendarMonth,
    SCalendarMonthDay,
    SCalendarMonthDays,
    SCalendarMonths,
    SCalendarMonthTitle,
    SCalendarOverlay,
    SCalendarOverlayError,
    SCalendarOverlayLoading,
    SCalendarOverlayLoadingSpan,
    SCalendarTitle,
    SSection,
} from "./Calendar.styled";
import {
    endOfMonth,
    endOfWeek,
    isSameMonth,
    startOfMonth,
    startOfWeek,
} from "date-fns";

const Calendar = ({
    earlyRecord,
    startDate,
    endDate,
    setDiapazon,
    isLoading,
    error,
}) => {
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
        <SSection>
            {isLoading || error ? (
                <SCalendarOverlay>
                    {isLoading && (
                        <SCalendarOverlayLoading>
                            <SCalendarOverlayLoadingSpan $delay="0s" />
                            <SCalendarOverlayLoadingSpan $delay="0.15s" />
                            <SCalendarOverlayLoadingSpan $delay="0.3s" />
                            <SCalendarOverlayLoadingSpan $delay="0.45s" />
                        </SCalendarOverlayLoading>
                    )}
                    {error && (
                        <SCalendarOverlayError>{error}</SCalendarOverlayError>
                    )}
                </SCalendarOverlay>
            ) : null}
            <SCalendarHeader>
                <SCalendarTitle>Период</SCalendarTitle>
                <SCalendarDayNames>
                    {dayNames.map((day) => (
                        <SCalendarDayName key={day}>{day}</SCalendarDayName>
                    ))}
                </SCalendarDayNames>
            </SCalendarHeader>
            <SCalendarMonths onMouseLeave={handleDayHoverOut}>
                {months.map((month) => {
                    const monthState = isMonthInRange(month);
                    return (
                        <SCalendarMonth key={month.month.getTime()}>
                            <SCalendarMonthTitle>
                                {monthsName[month.month.getMonth()] +
                                    " " +
                                    month.month.getFullYear()}
                            </SCalendarMonthTitle>
                            <SCalendarMonthDays>
                                {month.days.map((day) => (
                                    <SCalendarMonthDay
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
                                    </SCalendarMonthDay>
                                ))}
                            </SCalendarMonthDays>
                        </SCalendarMonth>
                    );
                })}
            </SCalendarMonths>
        </SSection>
    );
};

export default Calendar;
