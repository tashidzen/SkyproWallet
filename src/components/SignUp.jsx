import AuthForm from '../components/authForm/AuthForm';

const SignUp = () => {
  return <AuthForm isSignUp={true} />;
};

export default SignUp;
 
 
  
   
// import { useNavigate } from "react-router-dom";
// import { AuthForm } from "../components/authForm/AuthForm";

// function SignUpPage() {
//   const navigate = useNavigate();

//   const handleSuccess = () => {
//     navigate("/login", { replace: true });
//   };

//   return <AuthForm isSignUp={true} onSuccess={handleSuccess} />;
// }

// export default SignUpPage;
 
  
  
   
// import AuthForm from "../components/authForm/AuthForm";
// import Header from "../components/Header/Header";

// const SignUp = ({ setIsAuth }) => {
//   return (
//     <div>
//       <Header setIsAuth={setIsAuth} />
//       <AuthForm setIsAuth={setIsAuth} isSignUp={true} />
//     </div>
//   );
// };

// export default SignUp;