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
import { temporaryData } from "../../data";
import { isSameMonth } from "date-fns";

const Calendar = () => {
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
    let earlyRecord = new Date(temporaryData[0].date); //будет на входе в календарь
    temporaryData.forEach((item) => {
        let currentDate = new Date(item.date);
        if (currentDate < earlyRecord) {
            earlyRecord = currentDate;
        }
    });
    const getMonths = (startDate) => {
        const months = [];
        const currentDate = new Date();
        let currentMonth = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            1,
        );
        while (currentMonth <= currentDate) {
            months.push(currentMonth);
            currentMonth = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1,
                1,
            );
        }
        return months;
    };

    const getLastMonday = (month) => {
        const lastMonday = new Date(month.getFullYear(), month.getMonth());
        const shift = lastMonday.getDay() == 0 ? 7 : lastMonday.getDay();
        lastMonday.setDate(lastMonday.getDate() - (shift - 1));
        return lastMonday;
    };

    const getFirstSunday = (month) => {
        const nextSunday = new Date(month.getFullYear(), month.getMonth() + 1);
        const shift =
            nextSunday.getDay() == 0
                ? 7
                : nextSunday.getDay() == 1
                  ? 8
                  : nextSunday.getDay();
        nextSunday.setDate(nextSunday.getDate() + (7 - shift));
        return nextSunday;
    };

    const getDays = (month) => {
        const newDays = [];
        const startDate = getLastMonday(month);
        const endDate = getFirstSunday(month);
        for (
            let date = new Date(startDate);
            date <= endDate;
            date.setDate(date.getDate() + 1)
        ) {
            newDays.push({
                day: date.getDate(),
                date: new Date(date),
                isOtherMonth: !isSameMonth(date, month),
                isActive: false, // добавлю выбор после добавления функционала выбора диапазона дат
            });
        }
        return newDays;
    };

    const months = getMonths(earlyRecord);

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
                    <ScalendarMounth key={month}>
                        <ScalendarMounthTitle>
                            {monthsName[month.getMonth()] +
                                " " +
                                month.getFullYear()}
                        </ScalendarMounthTitle>
                        <ScalendarMounthDays>
                            {getDays(month).map((day) => (
                                <ScalendarMounthDay
                                    key={`${day.isOtherMonth ? "other" : "current"}-${day.day}`}
                                    $isOtherMonth={day.isOtherMonth}
                                    $isActive={day.isActive}
                                >
                                    {day.day}
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
