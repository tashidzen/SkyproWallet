import { useState, useEffect } from 'react';
import { signIn, signUp, logout } from '../services/auth';

export const useAuth = () => {
  // Безопасное чтение из localStorage
  let storedUser = null;
  let storedToken = null;

  try {
    const userData = localStorage.getItem('user');
    if (userData) {
      storedUser = JSON.parse(userData);
    }
    storedToken = localStorage.getItem('tokenAuth');
  } catch (error) {
    console.error('Ошибка чтения из localStorage:', error);
    localStorage.removeItem('user');
    localStorage.removeItem('tokenAuth');
  }

  const [token, setToken] = useState(storedToken);
  const [user, setUser] = useState(storedUser);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Даём время на чтение данных из localStorage
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
      console.error('Ошибка входа в useAuth:', err.message);
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
      console.error('Ошибка регистрации в useAuth:', err.message);
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

  return { token, user, isLoading, error, login, register, clearAuth };
};