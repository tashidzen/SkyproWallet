import { SDiagramContent, SDiagramElBlock, SDiagramElement, SDiagramElLabel, SDiagramElValue, SDiagramHeader, SDiagramSection } from "./Diagram.styled"

const Diagram = () => {
  const data = [
      { label: "Еда", value: 3590, color: "#d9b6ff" },
      { label: "Транспорт", value: 1835, color: "#ffb53d" },
      { label: "Жильё", value: 0, color: "#6ee4fe" },
      { label: "Развлечения", value: 1250, color: "#b0aeff" },
      { label: "Образование", value: 600, color: "#bcec30" },
      { label: "Другое", value: 2306, color: "#ffb9b8" },
  ];
  const maxValue = Math.max(...data.map(item => item.value));
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <SDiagramSection>
        <SDiagramHeader>
            <h2>{total.toLocaleString('ru-RU')} ₽</h2>
            <p>Расходы за <span>10 июля 2024</span></p>
        </SDiagramHeader>
        <SDiagramContent>
            {data.map((item) => (
                <SDiagramElement key={item.label}>
                    <SDiagramElValue>{item.value.toLocaleString('ru-RU')} ₽</SDiagramElValue>
                    <SDiagramElBlock $value={(item.value / maxValue) * 100} $color={item.color} />
                    <SDiagramElLabel>{item.label}</SDiagramElLabel>
                </SDiagramElement>
            ))}
        </SDiagramContent>
    </SDiagramSection>
    );
};

export default Diagram;