import React from 'react';

export const AuthContext = React.createContext({
  token: null,
  user: null,
  isLoading: true,
  error: null,
  login: () => Promise.reject(),
  register: () => Promise.reject(),
  clearAuth: () => {},
});
