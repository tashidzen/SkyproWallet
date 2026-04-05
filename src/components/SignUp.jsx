import AuthForm from "../components/authForm/AuthForm";
import Header from "../components/Header/Header";
// import { useLocation } from "react-router-dom";

const SignUp = ({ setIsAuth }) => {
//   const location = useLocation();
  return (
    <div>
      <Header setIsAuth={setIsAuth} />
      <AuthForm setIsAuth={setIsAuth} isSignUp={true} />
    </div>
  );
};

export default SignUp;