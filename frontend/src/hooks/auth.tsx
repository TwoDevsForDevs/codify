import React, { createContext, useCallback, useState, useContext } from 'react';
import { addHours } from 'date-fns';

import api from '../services/api';

interface IUserData {
  id: string;
  type: string;
  display_name: string;
  email: string;
  avatar: string;
}

interface IAuthState {
  access_token: string;
  user: IUserData;
  exp: Date;
}

interface IAuthContextData {
  user: IUserData;
  exp: Date;
  getCredentials(): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const access_token = localStorage.getItem('@Spotify:access_token');
    const user = localStorage.getItem('@Spotify:user');
    const exp = localStorage.getItem('@Spotify:exp');

    if (access_token && user && exp) {
      api.defaults.headers.authorization = `Bearer ${access_token}`;

      return { access_token, user: JSON.parse(user), exp: JSON.parse(exp) };
    }

    return {} as IAuthState;
  });

  const getCredentials = useCallback(async () => {
    const hashParams = {} as any;

    const query = window.location.search.replace('?', '');
    const entries = query.split('&');

    entries.forEach(entry => {
      const [key, value] = entry.split('=');
      hashParams[key] = value;
    });

    const { access_token } = hashParams;

    api.defaults.headers.authorization = `Bearer ${access_token}`;

    const response = await api.get('/me');

    localStorage.setItem('@Spotify:access_token', access_token);
    localStorage.setItem('@Spotify:user', JSON.stringify(response.data));

    const exp = addHours(new Date(), 1);

    localStorage.setItem('@Spotify:exp', JSON.stringify(exp));

    setData({
      access_token,
      user: response.data,
      exp,
    });

    window.location.href = '/top-artists';
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Spotify:access_token');
    localStorage.removeItem('@Spotify:user');
    localStorage.removeItem('@Spotify:exp');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, exp: data.exp, getCredentials, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
