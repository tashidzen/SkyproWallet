import { SPageBackground, SWrapper, STitle, SForm, SInputWrapper, SFooterWrapper, SFooterText, SFooterLink, SErrorMessageWrapper, SErrorMessageText } from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../button/Button"; 
import { useNavigate, useLocation } from "react-router-dom"; 
  
export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  }

  return ( 
    <SPageBackground>
      <SWrapper style={{ height: "334px" }}>
        <STitle>{isSignUp ? "Регистрация" : "Вход"}</STitle>
        <SForm id="form" onSubmit={handleLogin}>

          <SInputWrapper>
            {isSignUp && (<Input type="text" placeholder="Имя" />)}
            <Input type="text" placeholder="Эл. почта" />
            <Input type="password" placeholder="Пароль" />
          </SInputWrapper>

          <Button text={isSignUp ? "Зарегистрироваться" : "Войти"} type="primary" disabled={false} />

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
                Уже есть аккаунт? <SFooterLink to="/login">Войдите здесь</SFooterLink>
              </SFooterText>
            </SFooterWrapper>
          )}

        </SForm>
      </SWrapper>
    </SPageBackground>
  )
};

export default AuthForm;