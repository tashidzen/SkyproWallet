import { useState, useEffect } from 'react'; 
import { AuthContext } from './AuthContext';
import { signIn, signUp, logout } from '../services/auth';

export const AuthProvider = ({ children }) => {
  // Чтение из localStorage при инициализации
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem('tokenAuth');
    } catch (error) {
      console.error('Ошибка чтения token из localStorage:', error);
      return null;
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const userData = localStorage.getItem('user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Ошибка чтения user из localStorage:', error);
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Синхронная запись в localStorage при изменении состояния
  useEffect(() => {
    if (token && user) {
      localStorage.setItem('tokenAuth', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('tokenAuth');
      localStorage.removeItem('user');
    }
  }, [token, user]);

  const login = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await signIn(userData);
      setToken(data.token);
      setUser({
        name: data.name,
        email: data.email || data.login || null,
        token: data.token,
      });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async ({ name, login, password }) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await signUp({ name, login, password });
      setToken(data.token);
      setUser({
        name: data.name || name,
        email: data.email || login || null,
        token: data.token,
      });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearAuth = () => {
    logout();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      token,
      user,
      isLoading,
      error,
      login,
      register,
      clearAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
};
