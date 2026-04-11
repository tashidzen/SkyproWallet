import AppRoutes from './components/AppRoutes.jsx';
import Header from './components/Header/Header';
import AuthHeader from './components/AuthHeader/AuthHeader';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isAuthPage = ['/login', '/registration'].includes(location.pathname);

  return (
    <>
      {isAuthPage ? <AuthHeader /> : <Header />}
      <AppRoutes />
    </>
  );
}

export default App;