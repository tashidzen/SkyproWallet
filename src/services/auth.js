import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/user';


export async function signIn(userData) {
  try {
    const data = await axios.post(`${API_URL}/login`, userData, {
      headers: { 'Content-Type': '' },
    });
    localStorage.setItem('tokenAuth', data.data.user.token);
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(API_URL, { name, login, password }, {
      headers: { 'Content-Type': '' },
    });
    
    localStorage.setItem('tokenAuth', data.data.user.token);
    return data.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка регистрации');
  }
}
 
export async function getUsers() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data.users;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Ошибка при получении списка пользователей");
  }
} 

export function logout() {
  localStorage.removeItem('tokenAuth');
}