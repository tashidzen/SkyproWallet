import {
    FoodIcon,
    TransportIcon,
    HousingIcon,
    EntertainmentIcon,
    EducationIcon,
    OtherIcon,
} from "../components/Icons.jsx";

export const EXPENSE_CATEGORIES = [
    {
        name: "Еда",
        nameEn: "food",
        icon: <FoodIcon />,
    },
    {
        name: "Транспорт",
        nameEn: "transport",
        icon: <TransportIcon />,
    },
    {
        name: "Жильё",
        nameEn: "housing",
        icon: <HousingIcon />,
    },
    {
        name: "Развлечения",
        nameEn: "entertainment",
        icon: <EntertainmentIcon />,
    },
    {
        name: "Образование",
        nameEn: "education",
        icon: <EducationIcon />,
    },
    {
        name: "Другое",
        nameEn: "others",
        icon: <OtherIcon />,
    },
];
