import { useState, useEffect } from 'react';
import {
  Stable,
  FormTitle,
  FieldLabel,
  FormInput,
  DateInput,
  CategoryButton,
  FormButton
} from './NewExpenseForm.styled.js';
import { EXPENSE_CATEGORIES } from '../../constants/categories.jsx';

const NewExpenseForm = ({ editData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    date: '',
    amount: ''
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
        amount: editData.amount
      });
    } else {
      setFormData({ description: '', category: '', date: '', amount: '' });
    }
  }, [editData]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.description.trim()) newErrors.description = true;
    if (!formData.category) newErrors.category = true;
    if (!formData.date) newErrors.date = true;
    if (formData.amount && isNaN(formData.amount)) newErrors.amount = true;

    setErrors(newErrors);
    setIsSubmitDisabled(Object.keys(newErrors).length > 0);
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category });
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      onSubmit({
        ...formData,
        amount: formData.amount ? parseFloat(formData.amount) : 0,
        date: new Date(formData.date).toISOString()
      });
    }
  };

  const isValidInput = (value, field) => {
    if (field === 'description') return value.trim() !== '';
    if (field === 'date') return value !== '';
    if (field === 'amount') return !value || !isNaN(value);
    return false;
  };

  return (
    <Stable>
      <thead>
        <tr>
          <th colSpan="2">
            <FormTitle>{editData ? 'Редактирование' : 'Новый расход'}</FormTitle>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Описание
              {errors.description && <span style={{ color: '#cc0000', marginLeft: '4px' }}>*</span>}
            </FieldLabel>
            <FormInput
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Введите описание"
              $valid={isValidInput(formData.description, 'description')}
              $error={!!errors.description}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Категории
              {errors.category && <span style={{ color: '#cc0000', marginLeft: '4px' }}>*</span>}
            </FieldLabel>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginLeft: '-5px',
              maxWidth: 'calc(100% - 40px)',
              overflowX: 'auto',
              paddingBottom: '24px',
              boxSizing: 'border-box'
            }}>
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
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Дата
              {errors.date && <span style={{ color: '#cc0000', marginLeft: '4px' }}>*</span>}
            </FieldLabel>
            <DateInput
              type="date"
              name="date"
              value={formData.date ? new Date(formData.date).toISOString().split('T')[0] : ''}
              onChange={handleChange}
              placeholder="Введите дату"
              $valid={isValidInput(formData.date, 'date')}
              $error={!!errors.date}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Сумма
              {errors.amount && <span style={{ color: '#cc0000', marginLeft: '4px' }}>*</span>}
            </FieldLabel>
            <FormInput
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Введите сумму"
              $valid={isValidInput(formData.amount, 'amount')}
              $error={!!errors.amount}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ textAlign: 'center' }}>
            <FormButton
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
            >
              {editData ? 'Сохранить редактирование' : 'Добавить новый расход'}
            </FormButton>
            {editData && (
              <FormButton
                onClick={onCancel}
                style={{ background: '#fff', color: '#333', border: '0.5px solid #999999' }}
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