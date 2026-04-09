import {
  SPageBackground,
  SWrapper,
  STitle,
  SForm,
  SInputWrapper,
  SFooterWrapper,
  SFooterText,
  SFooterLink,
  SErrorMessageText
} from "./AuthForm.styled";
import { InputWrapper, SInput } from "../Input/Input.styled";
import { Button } from "../button/Button";
import { useAuth } from '../../hooks/useAuth.js';
import { useState } from 'react';

export const AuthForm = ({ isSignUp, onSuccess }) => {
  const { login, register, error: authError, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showGeneralError, setShowGeneralError] = useState(false);

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
    // Сброс общей ошибки при изменении любого поля
    if (showGeneralError) {
      setShowGeneralError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setShowGeneralError(true); // показываем общую ошибку
      return;
    }

    try {
      if (isSignUp) {
        await register(formData);
      } else {
        await login(formData);
      }
      onSuccess?.();
    } catch (err) {
      // Ошибки из useAuth уже попадают в authError
    }
  };

  // Определяем, есть ли ошибки валидации для стилизации полей
  const validationErrors = validate();
  const hasValidationErrors = Object.keys(validationErrors).length > 0;

  return (
    <SPageBackground>
      <SWrapper>
        <STitle>{isSignUp ? "Регистрация" : "Вход"}</STitle>
        <SForm id="form" onSubmit={handleSubmit}>
          <SInputWrapper>
            {isSignUp && (
              <InputWrapper hasError={!!validationErrors.name && hasSubmitted}>
                <SInput
                  type="text"
                  placeholder="Имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  hasError={!!validationErrors.name && hasSubmitted}
                />
              </InputWrapper>
            )}
            <InputWrapper hasError={!!validationErrors.login && hasSubmitted}>
              <SInput
                type="text"
                placeholder="Эл. почта"
                name="login"
                value={formData.login}
                onChange={handleChange}
                hasError={!!validationErrors.login && hasSubmitted}
              />
            </InputWrapper>
            <InputWrapper hasError={!!validationErrors.password && hasSubmitted}>
              <SInput
                type="password"
                placeholder="Пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
                hasError={!!validationErrors.password && hasSubmitted}
              />
            </InputWrapper>
          </SInputWrapper>

          {/* Текст ошибки без контейнера */}
          {showGeneralError && (
            <SErrorMessageText
              style={{
                marginTop: '12px',
                marginBottom: '24px'
              }}
            >
              Упс! Введённые вами данные некорректны.
              Введите данные корректно и повторите попытку.
            </SErrorMessageText>
          )}

          <Button
            text={isSignUp ? "Зарегистрироваться" : "Войти"}
            type="primary"
            disabled={showGeneralError} // изменено: кнопка блокируется только при showGeneralError = true
          />

          {!isSignUp && (
            <SFooterWrapper>
              <SFooterText>Нужно зарегистрироваться?</SFooterText>
              <SFooterLink to="/registration">
                Регистрируйтесь здесь
              </SFooterLink>
            </SFooterWrapper>
          )}

          {isSignUp && (
            <SFooterWrapper>
              <SFooterText>
                Уже есть аккаунт?
              </SFooterText>
              <SFooterLink to="/login">Войдите здесь</SFooterLink>
            </SFooterWrapper>
          )}
        </SForm>
      </SWrapper>
    </SPageBackground>
  );
};

export default AuthForm;