import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import MyExpences from '../components/MyExpences/MyExpences';
import ExpensesAnalysis from '../pages/ExpensesAnalysis';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import NotFoundPage from '../pages/NotFound'; 
import NewExpensePage from '../pages/NewExpensePage';

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
        path="/new-expense"
        element={token ? <NewExpensePage /> : <Navigate to="/login" replace />}
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