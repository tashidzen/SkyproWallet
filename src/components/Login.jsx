import { AuthForm } from "../components/authForm/AuthForm";


export const Login = ({setIsAuth}) => {
  return (
    <AuthForm setIsAuth={setIsAuth} isSignUp={false}/>
  )
}