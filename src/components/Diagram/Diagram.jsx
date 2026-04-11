import { format } from "date-fns";
import {
    SDiagramContent,
    SDiagramElBlock,
    SDiagramElement,
    SDiagramElLabel,
    SDiagramElValue,
    SDiagramHeader,
    SDiagramOverlay,
    SDiagramOverlayError,
    SDiagramOverlayLoading,
    SDiagramOverlayLoadingSpan,
    SDiagramSection,
} from "./Diagram.styled";
import { ru } from "date-fns/locale";

const Diagram = ({ data, isLoading, error, period }) => {
    const labels = {
        food: "Еда",
        transport: "Транспорт",
        housing: "Жильё",
        joy: "Развлечения",
        education: "Образование",
        others: "Другое",
    };
    const redusedData = [
        { label: "Еда", value: 0, color: "#d9b6ff" },
        { label: "Транспорт", value: 0, color: "#ffb53d" },
        { label: "Жильё", value: 0, color: "#6ee4fe" },
        { label: "Развлечения", value: 0, color: "#b0aeff" },
        { label: "Образование", value: 0, color: "#bcec30" },
        { label: "Другое", value: 0, color: "#ffb9b8" },
    ];
    if (data) {
        data.forEach((item) => {
            const category = labels[item.category];
            if (category) {
                const dataItem = redusedData.find((d) => d.label === category);
                if (dataItem) {
                    dataItem.value += item.sum;
                }
            } else {
                const dataItem = redusedData.find((d) => d.label === "Другое");
                if (dataItem) {
                    dataItem.value += item.sum;
                }
            }
        });
    }

    const maxValue = Math.max(...redusedData.map((item) => item.value));
    const total = redusedData.reduce((sum, item) => sum + item.value, 0);
    return (
        <SDiagramSection>
            {isLoading || error ? (
                <SDiagramOverlay>
                    {isLoading && (
                        <SDiagramOverlayLoading>
                            <SDiagramOverlayLoadingSpan $delay="0s" />
                            <SDiagramOverlayLoadingSpan $delay="0.15s" />
                            <SDiagramOverlayLoadingSpan $delay="0.3s" />
                            <SDiagramOverlayLoadingSpan $delay="0.45s" />
                        </SDiagramOverlayLoading>
                    )}
                    {error && (
                        <SDiagramOverlayError>{error}</SDiagramOverlayError>
                    )}
                </SDiagramOverlay>
            ) : null}
            <SDiagramHeader>
                <h2>{total.toLocaleString("ru-RU")} ₽</h2>
                <p>
                    Расходы за{" "}
                    <span>
                        {format(period.start, "d MMMM yyyy", { locale: ru })} —{" "}
                        {format(period.end, "d MMMM yyyy", { locale: ru })}
                    </span>
                </p>
            </SDiagramHeader>
            <SDiagramContent>
                {redusedData.map((item) => (
                    <SDiagramElement key={item.label}>
                        <SDiagramElValue>
                            {item.value.toLocaleString("ru-RU")} ₽
                        </SDiagramElValue>
                        <SDiagramElBlock
                            $value={
                                maxValue != 0
                                    ? (item.value / maxValue) * 100
                                    : 0
                            }
                            $color={item.color}
                        />
                        <SDiagramElLabel>{item.label}</SDiagramElLabel>
                    </SDiagramElement>
                ))}
            </SDiagramContent>
        </SDiagramSection>
    );
};

export default Diagram;
