import "../App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import FirstPage from "../pages/MyExpences";
import SecondPage from "../pages/ExpensesAnalysis";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import NotFoundPage from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(true); // Изменить на false после реализации авторизации

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<FirstPage />}>
                    <Route path="analysis" element={<SecondPage />}></Route>
                </Route>
            </Route>
            <Route
                path="/login"
                element={<SignInPage setIsAuth={setIsAuth} />}
            />
            <Route
                path="/register"
                element={<SignUpPage setIsAuth={setIsAuth} />}
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
