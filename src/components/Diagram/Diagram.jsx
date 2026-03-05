import { SDiagramSection } from "./Diagram.styled"

const Diagram = () => {
  const data = [
      { label: "Еда", value: 3590, color: "#d9b6ff" },
      { label: "Транспорт", value: 1835, color: "#ffb53d" },
      { label: "Жильё", value: 0, color: "#6ee4fe" },
      { label: "Развлечения", value: 1250, color: "#b0aeff" },
      { label: "Образование", value: 600, color: "#bcec30f" },
      { label: "Другое", value: 2306, color: "#ffb9b8" },
  ];
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <SDiagramSection>
        <SDiagramHeader>
            <h2>{total} ₽</h2>
            <p>Расходы за <span>10 июля 2024</span></p>
        </SDiagramHeader>
        <SDiagramContent>
            {data.map((item) => (
                <SDiagramElement key={item.label}>
                    <SDiagramElValue>{item.value} ₽</SDiagramElValue>
                    <SDiagramElBlock value={(item.value / total) * 100} color={item.color} />
                    <SDiagramElLabel>{item.label}</SDiagramElLabel>
                </SDiagramElement>
            ))}
        </SDiagramContent>
    </SDiagramSection>
    );
};

export default Diagram;