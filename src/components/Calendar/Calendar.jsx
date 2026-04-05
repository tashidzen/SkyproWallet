import { ScalendarDayName, ScalendarDayNames, ScalendarHeader, ScalendarMounth, ScalendarMounthDay, ScalendarMounthDays, ScalendarMounths, ScalendarMounthTitle, ScalendarTitle, Ssection } from "./Calendar.styled";

const Calendar = () => {
    const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    const mounths = ["Май 2025", "Июнь 2025", "Июль 2025"];
    const daysInMounth = 31;
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
                {mounths.map((mounth) => (
                    <ScalendarMounth key={mounth}>
                        <ScalendarMounthTitle>{mounth}</ScalendarMounthTitle>
                        <ScalendarMounthDays>
                            {Array.from({ length: daysInMounth }, (_, index) => (
                                <ScalendarMounthDay key={index}>{index + 1}</ScalendarMounthDay>
                            ))}
                        </ScalendarMounthDays>
                    </ScalendarMounth>
                ))}
            </ScalendarMounths>
        </Ssection>
    );
};

export default Calendar;
