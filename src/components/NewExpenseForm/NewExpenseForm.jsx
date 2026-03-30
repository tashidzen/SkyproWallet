import React, { useState, useEffect } from 'react';
import {
  Stable,
  FormTitle,
  FieldLabel,
  FormInput,
  DateInput,
  CategoryButton,
  FormButton
} from './NewExpenseForm.styled.js';
import {
  FoodIcon,
  TransportIcon,
  HousingIcon,
  EntertainmentIcon,
  EducationIcon,
  OtherIcon
} from '../../components/Icons.jsx';

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

  const categories = [
    { name: 'Еда', icon: <FoodIcon /> },
    { name: 'Транспорт', icon: <TransportIcon /> },
    { name: 'Жильё', icon: <HousingIcon /> },
    { name: 'Развлечения', icon: <EntertainmentIcon /> },
    { name: 'Образование', icon: <EducationIcon /> },
    { name: 'Другое', icon: <OtherIcon /> }
  ];

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
              {errors.description && <span style={{ color: '#cc0000', marginLeft: '4px' }}>(*)</span>}
            </FieldLabel>
            <FormInput
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Введите описание"
              valid={isValidInput(formData.description, 'description')}
              error={!!errors.description}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Категории
              {errors.category && <span style={{ color: '#cc0000', marginLeft: '4px' }}>(*)</span>}
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
              {categories.map((cat) => (
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
              {errors.date && <span style={{ color: '#cc0000', marginLeft: '4px' }}>(*)</span>}
            </FieldLabel>
            <DateInput
              type="date"
              name="date"
              value={formData.date ? new Date(formData.date).toISOString().split('T')[0] : ''}
              onChange={handleChange}
              placeholder="Введите дату"
              valid={isValidInput(formData.date, 'date')}
              error={!!errors.date}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <FieldLabel>
              Сумма
              {errors.amount && <span style={{ color: '#cc0000', marginLeft: '4px' }}>(*)</span>}
            </FieldLabel>
            <FormInput
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Введите сумму"
              valid={isValidInput(formData.amount, 'amount')}
              error={!!errors.amount}
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

 
 
  
   
// import React, { useState, useEffect } from 'react';
// import {
//   Stable,
//   FormTitle,
//   FieldLabel,
//   FormInput,
//   DateInput,
//   CategoryButton,
//   FormButton
// } from './NewExpenseForm.styled.js';
// import {
//   FoodIcon,
//   TransportIcon,
//   HousingIcon,
//   EntertainmentIcon,
//   EducationIcon,
//   OtherIcon
// } from '../../components/Icons.jsx';

// const NewExpenseForm = ({ editData, onSubmit, onCancel }) => {
//   const [formData, setFormData] = useState({
//     description: '',
//     category: '',
//     date: '',
//     amount: ''
//   });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (editData) {
//       setFormData({
//         id: editData.id,
//         description: editData.description,
//         category: editData.category,
//         date: editData.date,
//         amount: editData.amount
//       });
//     } else {
//       setFormData({ description: '', category: '', date: '', amount: '' });
//     }
//   }, [editData]);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.description.trim()) newErrors.description = 'Описание обязательно';
//     if (!formData.category) newErrors.category = 'Категория обязательна';
//     if (!formData.date) newErrors.date = 'Дата обязательна';
//     if (formData.amount && isNaN(formData.amount)) newErrors.amount = 'Сумма должна быть числом';
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleCategorySelect = (category) => {
//     setFormData({ ...formData, category });
//     setErrors({ ...errors, category: '' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length === 0) {
//       onSubmit({
//         ...formData,
//         amount: formData.amount ? parseFloat(formData.amount) : 0,
//         date: new Date(formData.date).toISOString()
//       });
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   const isValidInput = (value, field) => {
//     if (field === 'description') return value.trim() !== '';
//     if (field === 'date') return value !== '';
//     if (field === 'amount') return !value || !isNaN(value);
//     return false;
//   };

//   const categories = [
//     { name: 'Еда', icon: <FoodIcon /> },
//     { name: 'Транспорт', icon: <TransportIcon /> },
//     { name: 'Жильё', icon: <HousingIcon /> },
//     { name: 'Развлечения', icon: <EntertainmentIcon /> },
//     { name: 'Образование', icon: <EducationIcon /> },
//     { name: 'Другое', icon: <OtherIcon /> }
//   ];

//   return (
//     <Stable>
//       <thead>
//         <tr>
//           <th colSpan="2">
//             <FormTitle>{editData ? 'Редактирование' : 'Новый расход'}</FormTitle>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td colSpan="2">
//             <FieldLabel>Описание</FieldLabel>
//             <FormInput
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Введите описание"
//               valid={isValidInput(formData.description, 'description')}
//               editing={!!editData}
//             />
//             {errors.description && (
//               <p style={{ color: '#ff4444', fontSize: '11px', marginTop: '-8px', marginBottom: '8px', marginLeft: '20px' }}>
//                 {errors.description}
//               </p>
//             )}
//           </td>
//         </tr>
//         <tr>
//           <td colSpan="2">
//             <FieldLabel>Категории</FieldLabel>
//             <div style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               marginLeft: '-5px',
//               maxWidth: 'calc(100% - 40px)',
//               overflowX: 'auto',
//               paddingBottom: '24px',
//               boxSizing: 'border-box'
//             }}>
//               {categories.map((cat) => (
//                 <CategoryButton
//                   key={cat.name}
//                   selected={formData.category === cat.name}
//                   onClick={() => handleCategorySelect(cat.name)}
//                 >
//                   {cat.icon}
//                   {cat.name}
//                 </CategoryButton>
//               ))}
//             </div>
//             {errors.category && (
//               <p style={{ color: '#ff4444', fontSize: '11px', marginTop: '5px', marginBottom: '8px', marginLeft: '20px' }}>
//                 {errors.category}
//               </p>
//             )}
//           </td>
//         </tr>
//         <tr>
//           <td colSpan="2">
//             <FieldLabel>Дата</FieldLabel>
//             <DateInput
//               type="date"
//               name="date"
//               value={formData.date ? new Date(formData.date).toISOString().split('T')[0] : ''}
//               onChange={handleChange}
//               placeholder="Введите дату"
//               valid={isValidInput(formData.date, 'date')}
//               editing={!!editData}
//             />
//             {errors.date && (
//               <p style={{ color: '#ff4444', fontSize: '11px', marginTop: '-8px', marginBottom: '8px', marginLeft: '32px' }}>
//                 {errors.date}
//               </p>
//             )}
//           </td>
//         </tr>
//         <tr>
//           <td colSpan="2">
//             <FieldLabel>Сумма</FieldLabel>
//             <FormInput
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               placeholder="Введите сумму"
//               valid={isValidInput(formData.amount, 'amount')}
//               editing={!!editData}
//             />
//             {errors.amount && (
//               <p style={{ color: '#ff4444', fontSize: '11px', marginTop: '-8px', marginBottom: '8px', marginLeft: '20px' }}>
//                 {errors.amount}
//               </p>
//             )}
//           </td>
//         </tr>
//         <tr>
//           <td colSpan="2" style={{ textAlign: 'center' }}>
//             <FormButton type="submit" onClick={handleSubmit}>
//               {editData ? 'Сохранить редактирование' : 'Добавить новый расход'}
//             </FormButton>
//             {editData && (
//               <FormButton
//                 onClick={onCancel}
//                 style={{ background: '#fff', color: '#333', border: '0.5px solid #999999' }}
//               >
//                 Отмена
//               </FormButton>
//             )}
//           </td>
//         </tr>
//       </tbody>
//     </Stable>
//   );
// };

// export default NewExpenseForm;