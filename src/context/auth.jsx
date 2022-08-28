import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const logOut = () => {
    localStorage.clear();
    setUser(null);
    return 'LogOut'
  };

  useEffect(() => {
    const loadingStorageData = async () => {
      const storageUser = localStorage.getItem('@Auth: user');
      const storageToken = localStorage.getItem('@Auth: token');

      if (storageUser && storageToken) {
        setUser(storageUser);
      }
    };
    loadingStorageData();
  }, []);

  const login = async (email, senha) => {
    const response = await api.post('/Autenticar', {
      email,
      senha,
    });

    if (response.data.error) {
      return 'erro';
    } else {
      setUser(response.data.user);
      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.token}`;
      localStorage.setItem('@Auth:token', JSON.stringify(response.data.token));
      localStorage.setItem('@Auth:user', JSON.stringify(response.data.user));
    }
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
