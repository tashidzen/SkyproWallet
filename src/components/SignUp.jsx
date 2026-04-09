import AuthForm from "../components/authForm/AuthForm";
import Header from "../components/Header/Header";

const SignUp = ({ setIsAuth }) => {
  return (
    <div>
      <Header setIsAuth={setIsAuth} />
      <AuthForm setIsAuth={setIsAuth} isSignUp={true} />
    </div>
  );
};

export default SignUp;