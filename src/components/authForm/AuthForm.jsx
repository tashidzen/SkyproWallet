import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SPageBackground,
  SWrapper,
  STitle,
  SForm,
  SInputWrapper,
  SFooterWrapper,
  SFooterText,
  SFooterLink,
  SErrorMessageText,
} from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useAuth } from '../../hooks/useAuth';

export const AuthForm = ({ isSignUp, onSuccess }) => {
  const navigate = useNavigate();
  const { login, register, error: authError, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showGeneralError, setShowGeneralError] = useState(false);

  // Валидация для показа ошибок после отправки
  const validate = () => {
    const newErrors = {};

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.login)) {
      newErrors.login = true;
    }

    if (!formData.password) {
      newErrors.password = true;
    } else if (formData.password.length < 6) {
      newErrors.password = true;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (showGeneralError) {
      setShowGeneralError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setShowGeneralError(true);
      return;
    }

    try {
      if (isSignUp) {
        await register(formData);
        navigate('/login', { replace: true });
      } else {
        await login(formData);
        navigate('/', { replace: true });
      }
      onSuccess?.();
    } catch (err) {
      console.error('Ошибка в handleSubmit:', err.message);
      setShowGeneralError(true);
    }
  };

  // Реальная валидация для подсветки полей (даже до отправки)
  const isFieldValid = (fieldName) => {
    const value = formData[fieldName];

    // Пустое поле — не валидно
    if (!value) return false;

    if (fieldName === 'name' && isSignUp) {
      return value.trim().length > 0;
    }

    if (fieldName === 'login') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    if (fieldName === 'password') {
      return value.length >= 6;
    }

    return false;
  };

  const validationErrors = validate();

  return (
    <SPageBackground>
      <SWrapper>
        <STitle>{isSignUp ? "Регистрация" : "Вход"}</STitle>
        <SForm onSubmit={handleSubmit}>
          <SInputWrapper>
            {isSignUp && (
              <Input
                type="text"
                placeholder="Имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
                $hasError={!!validationErrors.name && hasSubmitted}
                $isValid={isFieldValid("name")}
              />
            )}
            <Input
              type="text"
              placeholder="Эл. почта"
              name="login"
              value={formData.login}
              onChange={handleChange}
              $hasError={!!validationErrors.login && hasSubmitted}
              $isValid={isFieldValid("login")}
            />
            <Input
              type="password"
              placeholder="Пароль"
              name="password"
              value={formData.password}
              onChange={handleChange}
              $hasError={!!validationErrors.password && hasSubmitted}
              $isValid={isFieldValid("password")}
            />
          </SInputWrapper>

          {(showGeneralError || authError) && (
            <SErrorMessageText>
              {authError || "Упс Введённые вами данные некорректны. Введите данные корректно и повторите попытку."}
            </SErrorMessageText>
          )}

          <Button
            text={isSignUp ? "Зарегистрироваться" : "Войти"}
            type="primary"
            disabled={isLoading || (hasSubmitted && Object.keys(validationErrors).length > 0)}
            isLoading={isLoading}
          />

          {!isSignUp && (
            <SFooterWrapper>
              <SFooterText>Нужно зарегистрироваться?</SFooterText>
              <SFooterLink to="/registration">Регистрируйтесь здесь</SFooterLink>
            </SFooterWrapper>
          )}

          {isSignUp && (
            <SFooterWrapper>
              <SFooterText>Уже есть аккаунт?</SFooterText>
              <SFooterLink to="/login">Войдите здесь</SFooterLink>
            </SFooterWrapper>
          )}
        </SForm>
      </SWrapper>
    </SPageBackground>
  );
};

export default AuthForm;