import { useState, useEffect } from "react";
import {
  Stable,
  FormTitle,
  FieldLabel,
  CategoriesContainer,
  SFixedBottom,
} from "./NewExpenseForm.styled.js";
import { EXPENSE_CATEGORIES } from "../../constants/categories.jsx";
import  Input  from "../Input/Input";     
import Button  from "../Button/Button"; 

const NewExpenseForm = ({ editData, onSubmit, onCancel, isSubmitting = false }) => {
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

    // Удаляем ошибку при вводе
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
      <Stable>
        <thead>
          <tr>
            <th colSpan="2">
              <FormTitle>{editData ? "Редактирование" : "Новый расход"}</FormTitle>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Описание */}
          <tr>
            <td colSpan="2">
              <FieldLabel>
                Описание
                {errors.description && <span style={{ color: "#cc0000", marginLeft: "4px" }}>*</span>}
              </FieldLabel>
              <Input
                type="text"
                placeholder="Введите описание (минимум 4 символа)"
                name="description"
                value={formData.description}
                onChange={handleChange}
                $hasError={!!errors.description}
                $isValid={formData.description.trim().length >= 4}
                onBlur={validateForm}
              />
            </td>
          </tr>

          {/* Категории */}
          <tr>
            <td colSpan="2">
              <FieldLabel>
                Категории
                {errors.category && <span style={{ color: "#cc0000", marginLeft: "4px" }}>*</span>}
              </FieldLabel>
              <CategoriesContainer>
                {EXPENSE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => handleCategorySelect(cat.name)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "8px 20px",
                      margin: "0 0 0 6px",
                      border: "none",
                      borderRadius: "30px",
                      background: formData.category === cat.name ? "#F1EBFD" : "#F4F5F6",
                      color: formData.category === cat.name ? "#7334EA" : "#000000",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "12px", 
                      fontWeight: "400",
                      cursor: "pointer", 
                      gap: "12px",
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                      minWidth: "min-content",
                      outline: "none",
                    }}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </CategoriesContainer>
            </td>
          </tr>

          {/* Дата */}
          <tr>
            <td colSpan="2">
              <FieldLabel>
                Дата
                {errors.date && <span style={{ color: "#cc0000", marginLeft: "4px" }}>*</span>}
              </FieldLabel>
              <Input
                type="date"
                placeholder="Введите дату"
                name="date"
                value={formData.date ? new Date(formData.date).toISOString().split("T")[0] : ""}
                onChange={handleDateChange}
                $hasError={!!errors.date}
                $isValid={!!formData.date}
                onBlur={validateForm}
              />
            </td>
          </tr>

          {/* Сумма */}
          <tr>
            <td colSpan="2">
              <FieldLabel>
                Сумма
                {errors.amount && <span style={{ color: "#cc0000", marginLeft: "4px" }}>*</span>}
              </FieldLabel>
              <Input
                type="number"
                placeholder="Введите сумму"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                $hasError={!!errors.amount}
                $isValid={!!formData.amount && !isNaN(formData.amount) && parseFloat(formData.amount) > 0}
                onBlur={validateForm}
              />
            </td>
          </tr>

          {/* Кнопки — десктоп */}
          <tr className="desktop-buttons">
            <td colSpan="2">
              <Button
                text={
                  isSubmitting
                    ? editData
                      ? "Сохранение..."
                      : "Добавление..."
                    : editData
                    ? "Сохранить редактирование"
                    : "Добавить новый расход"
                }
                onClick={handleSubmit}
                disabled={isSubmitDisabled || isSubmitting}
                isLoading={isSubmitting}
                // style={{ width: "100%", marginBottom: "8px", height: "36px" }}
              />
              {editData && (
                <Button
                  text="Отмена"
                  onClick={onCancel}
                  type="secondary"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    height: "36px",
                    background: "#fff",
                    color: "#333",
                    border: "0.5px solid #999999",
                  }}
                />
              )}
            </td>
          </tr>
        </tbody>
      </Stable>

      {/* Фиксированная панель — мобильные */}
      <SFixedBottom>
        <Button
          text={
            isSubmitting
              ? editData
                ? "Сохранение..."
                : "Добавление..."
              : editData
              ? "Сохранить редактирование"
              : "Добавить новый расход"
          }
          onClick={handleSubmit}
          disabled={isSubmitDisabled || isSubmitting}
          isLoading={isSubmitting}
          style={{ width: "100%", marginBottom: "8px", height: "36px" }}
        />
        {editData && (
          <Button
            text="Отмена"
            onClick={onCancel}
            type="secondary"
            disabled={isSubmitting}
            style={{
              width: "100%",
              height: "36px",
              background: "#fff",
              color: "#333",
              border: "0.5px solid #999999",
            }}
          />
        )}
      </SFixedBottom>
    </>
  );
};

export default NewExpenseForm;