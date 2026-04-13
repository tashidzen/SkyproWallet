import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/user'; 


export async function signIn(userData) {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      headers: { 'Content-Type': '' },
    });
    const user = response.data.user;
    localStorage.setItem('tokenAuth', user.token);
    return user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка авторизации');
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(API_URL, { name, login, password }, {
      headers: { 'Content-Type': '' },
    });
    const user = response.data.user;
    localStorage.setItem('tokenAuth', user.token);
    return user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка регистрации');
  }
}

export function logout() {
  localStorage.removeItem('tokenAuth');
  localStorage.removeItem('user');
}