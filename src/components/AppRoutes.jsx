import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import FirstPage from "../pages/MyExpences";
import SecondPage from "../pages/ExpensesAnalysis";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import NotFoundPage from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false); 

    return (
        <Routes> 
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<FirstPage />}></Route>
                <Route path="/analysis" element={<SecondPage />}></Route>
            </Route> 
            <Route
                path="/login"
                element={<SignInPage setIsAuth={setIsAuth} />}
            />
            <Route
                path="/registration"
                element={<SignUpPage setIsAuth={setIsAuth} />}
            />
            
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
