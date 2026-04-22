import { useState, useEffect } from "react";
import {
  Stable,
  FormTitle,
  FieldLabel,
  FormInput,
  DateInput,
  CategoryButton,
  FormButton,
  CategoriesContainer,
  SFixedBottom,
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

    if (!formData.description.trim()) {
      newErrors.description = true;
    } else if (formData.description.trim().length < 4) {
      newErrors.description = true;
    }

    if (!formData.category) {
      newErrors.category = true;
    }

    if (!formData.date) {
      newErrors.date = true;
    }

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
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
      setIsSubmitDisabled(Object.keys(updatedErrors).length > 0);
    }
  };

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category });

    if (errors.category) {
      const updatedErrors = { ...errors };
      delete updatedErrors.category;
      setErrors(updatedErrors);
      setIsSubmitDisabled(Object.keys(updatedErrors).length > 0);
    }
  };

  const handleDateChange = (e) => {
    handleChange(e);

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
    <>
      {/* Основная форма */}
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
                $last
                onBlur={() => validateForm()}
              />
            </td>
          </tr>

          {/* Кнопки — только на десктопе и планшете */}
          <tr className="desktop-buttons">
            <td colSpan="2">
              <FormButton
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitDisabled || isSubmitting}
                style={{ width: "100%", marginBottom: "8px", height: "36px" }}
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
                    width: "100%",
                    height: "36px",
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

      {/* ✅ Фиксированная панель — ВНЕ таблицы, но прижата к её низу */}
      <SFixedBottom>
        <FormButton
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitDisabled || isSubmitting}
          style={{ width: "100%", marginBottom: "8px", height: "36px" }}
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
              width: "100%",
              height: "36px",
              background: "#fff",
              color: "#333",
              border: "0.5px solid #999999",
            }}
          >
            Отмена
          </FormButton>
        )}
      </SFixedBottom>
    </>
  );
};

export default NewExpenseForm;