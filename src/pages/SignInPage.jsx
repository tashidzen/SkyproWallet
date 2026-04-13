import AuthForm from '../components/authForm/AuthForm';

const SignInPage = () => {
  return <AuthForm isSignUp={false} />;
};

export default SignInPage;

 
  
  
   
// import { useNavigate } from "react-router-dom";
// import { AuthForm } from "../components/authForm/AuthForm";

// function SignInPage() {
//   const navigate = useNavigate();

//   const handleSuccess = () => {
//     navigate("/analysis", { replace: true });
//   };

//   return <AuthForm isSignUp={false} onSuccess={handleSuccess} />;
// }

// export default SignInPage;
 
 
   
   
// import SignIn from "../components/SignIn";

// const SignInPage = ({ setIsAuth }) => {
//     return <SignIn setIsAuth={setIsAuth} />;
// };

// export default SignInPage;
