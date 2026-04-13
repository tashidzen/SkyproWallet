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
  SErrorMessageText
} from "./AuthForm.styled";
import { InputWrapper, SInput } from "../Input/Input.styled";
import { Button } from "../button/Button";
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

    console.log('Отправляем данные формы:', formData);

    try {
      if (isSignUp) {
        await register(formData);
        console.log('Регистрация успешна, перенаправляем на /login');
        navigate('/login', { replace: true });
      } else {
        await login(formData);
        console.log('Вход успешен, перенаправляем на / (Мои расходы)');
        navigate('/', { replace: true }); // РЕДИРЕКТ НА ГЛАВНУЮ СТРАНИЦУ
      }
      onSuccess?.();
    } catch (err) {
      console.error('Ошибка в handleSubmit:', err.message);
      setShowGeneralError(true);
    }
  };

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

          {(showGeneralError || authError) && (
            <SErrorMessageText
              style={{
                marginTop: '12px',
                marginBottom: '24px'
              }}
            >
              {authError || "Упс! Введённые вами данные некорректны. Введите данные корректно и повторите попытку."}
            </SErrorMessageText>
          )}

          <Button
            text={isSignUp ? "Зарегистрироваться" : "Войти"}
            type="primary"
            disabled={isLoading || showGeneralError}
            isLoading={isLoading}
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