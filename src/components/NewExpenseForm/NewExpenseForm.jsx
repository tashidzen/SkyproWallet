import { useState, useEffect } from "react";
import {
  Stable,
  FormTitle,
  FieldLabel,
  FormInput,
  DateInput,
  CategoryButton,
  FormButton,
  CategoriesContainer, // добавлен новый импорт
} from "./NewExpenseForm.styled.js";
import { EXPENSE_CATEGORIES } from "../../constants/categories.jsx";

const NewExpenseForm = ({
  editData,
  onSubmit,
  onCancel,
  isSubmitting = false,
}) => {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    date: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  useEffect(() => {
    if (editData) {
      setFormData({
        id: editData.id,
        description: editData.description,
        category: editData.category,
        date: editData.date,
        amount: editData.amount,
      });
    } else {
      setFormData({
        description: "",
        category: "",
        date: "",
        amount: "",
      });
    }
  }, [editData]);

  const validateForm = () => {
    const newErrors = {};

    // Проверка описания: не пустое и минимум 4 символа
    if (!formData.description.trim()) {
      newErrors.description = true;
    } else if (formData.description.trim().length < 4) {
      newErrors.description = true;
    }

    // Проверка категории
    if (!formData.category) {
      newErrors.category = true;
    }

    // Проверка даты
    if (!formData.date) {
      newErrors.date = true;
    }

    // Проверка суммы: не пустая и корректное число
    if (!formData.amount) {
      newErrors.amount = true;
    } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      newErrors.amount = true;
    }

    setErrors(newErrors);
    setIsSubmitDisabled(Object.keys(newErrors).length > 0);
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Обновляем данные формы
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Сбрасываем ошибку для текущего поля при начале ввода
    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
      setIsSubmitDisabled(Object.keys(updatedErrors).length > 0);
    }
  };

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category });

    // Сбрасываем ошибку категории при выборе
    if (errors.category) {
      const updatedErrors = { ...errors };
      delete updatedErrors.category;
      setErrors(updatedErrors);
      setIsSubmitDisabled(Object.keys(updatedErrors).length > 0);
    }
  };

  const handleDateChange = (e) => {
    handleChange(e);

    // При выборе даты сбрасываем ошибку для поля даты
    if (e.target.value && errors.date) {
      const updatedErrors = { ...errors };
      delete updatedErrors.date;
      setErrors(updatedErrors);
      setIsSubmitDisabled(Object.keys(updatedErrors).length > 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      onSubmit({
        ...formData,
        amount: parseFloat(formData.amount),
        date: new Date(formData.date).toISOString(),
      });

      // Сброс формы только после успешного сохранения (только для новых записей)
      if (!editData) {
        setFormData({
          description: "",
          category: "",
          date: "",
          amount: "",
        });
        setErrors({});
        setIsSubmitDisabled(false);
      }
    }
  };

  return (
    <Stable>
      <thead>
        <tr>
          <th colSpan="2">
            <FormTitle>
              {editData ? "Редактирование" : "Новый расход"}
            </FormTitle>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Описание
              {errors.description && (
                <span
                  style={{
                    color: "#cc0000",
                    marginLeft: "4px",
                }}
                >
                  *
                </span>
              )}
            </FieldLabel>
            <FormInput
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Введите описание (минимум 4 символа)"
              $error={!!errors.description}
              onBlur={() => validateForm()}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Категории
              {errors.category && (
                <span
                  style={{
            color: "#cc0000",
            marginLeft: "4px",
          }}
                >
                  *
                </span>
              )}
            </FieldLabel>
            <CategoriesContainer>
              {EXPENSE_CATEGORIES.map((cat) => (
                <CategoryButton
                  key={cat.name}
                  selected={formData.category === cat.name}
                  onClick={() => handleCategorySelect(cat.name)}
                >
                  {cat.icon}
                  {cat.name}
                </CategoryButton>
              ))}
            </CategoriesContainer>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Дата
              {errors.date && (
                <span
                  style={{
            color: "#cc0000",
            marginLeft: "4px",
          }}
                >
                  *
                </span>
              )}
            </FieldLabel>
            <DateInput
              type="date"
              name="date"
              value={
                formData.date
                  ? new Date(formData.date).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleDateChange}
              placeholder="Введите дату"
              $error={!!errors.date}
              onBlur={() => validateForm()}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Сумма
              {errors.amount && (
                <span
                  style={{
            color: "#cc0000",
            marginLeft: "4px",
          }}
                >
                  *
                </span>
              )}
            </FieldLabel>
            <FormInput
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Введите сумму"
              $error={!!errors.amount}
              onBlur={() => validateForm()}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ textAlign: "center" }}>
            <FormButton
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitDisabled || isSubmitting}
            >
              {isSubmitting
                ? editData
                  ? "Сохранение..."
                  : "Добавление..."
                : editData
                  ? "Сохранить редактирование"
                  : "Добавить новый расход"}
            </FormButton>
                        {editData && (
              <FormButton
                onClick={onCancel}
                style={{
                  background: "#fff",
                  color: "#333",
                  border: "0.5px solid #999999",
                }}
              >
                Отмена
              </FormButton>
            )}
          </td>
        </tr>
      </tbody>
    </Stable>
  );
};

export default NewExpenseForm;