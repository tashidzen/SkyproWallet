import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import MyExpences from '../components/MyExpences/MyExpences';
import ExpensesAnalysis from '../pages/ExpensesAnalysis';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import NotFoundPage from '../pages/NotFound';

function AppRoutes() {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <MyExpences /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/analysis"
        element={token ? <ExpensesAnalysis /> : <Navigate to="/login" replace />}
      />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/registration" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
 
 
  
    
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import MyExpences from '../pages/MyExpences';
// import ExpensesAnalysis from '../pages/ExpensesAnalysis';
// import SignInPage from '../pages/SignInPage';
// import SignUpPage from '../pages/SignUpPage';
// import NotFoundPage from '../pages/NotFound';

// function AppRoutes() {
//   const { token, isLoading } = useAuth();

//   if (isLoading) {
//     return <div>Загрузка...</div>;
//   }

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={token ? <MyExpences /> : <Navigate to="/login" replace />}
//       />
//       <Route
//         path="/analysis"
//         element={token ? <ExpensesAnalysis /> : <Navigate to="/login" replace />}
//       />
//       <Route path="/login" element={<SignInPage />} />
//       <Route path="/registration" element={<SignUpPage />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// }

// export default AppRoutes;


 
 
  
   
// import { Route, Routes } from "react-router-dom";
// import { useState } from "react";
// import FirstPage from "../pages/MyExpences";
// import SecondPage from "../pages/ExpensesAnalysis";
// import SignInPage from "../pages/SignInPage";
// import SignUpPage from "../pages/SignUpPage";
// import NotFoundPage from "../pages/NotFound";
// import PrivateRoute from "./PrivateRoute";

// function AppRoutes() {
//     const [isAuth, setIsAuth] = useState(false); 

//     return (
//         <Routes> 
//             <Route element={<PrivateRoute isAuth={isAuth} />}>
//                 <Route path="/" element={<FirstPage />}></Route>
//                 <Route path="/analysis" element={<SecondPage />}></Route>
//             </Route> 
//             <Route
//                 path="/login"
//                 element={<SignInPage setIsAuth={setIsAuth} />}
//             />
//             <Route
//                 path="/registration"
//                 element={<SignUpPage setIsAuth={setIsAuth} />}
//             />
            
//             <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//     );
// }

// export default AppRoutes;
