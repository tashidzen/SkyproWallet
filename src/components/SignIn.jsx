import AuthForm from "../components/authForm/AuthForm"; 
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";

const SignIn = ({ setIsAuth }) => {
  const location = useLocation();
  return (
    <div>
      <Header setIsAuth={setIsAuth} location={location} />
      <AuthForm setIsAuth={setIsAuth} isSignUp={false} />
    </div>
  );
};

export default SignIn;