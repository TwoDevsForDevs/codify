import React, { createContext, useCallback, useState, useContext } from "react";

import api from "../services/api";

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
}

interface IAuthContextData {
  user: IUserData;
  getCredentials(): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const access_token = localStorage.getItem("@Spotify:access_token");
    const user = localStorage.getItem("@Spotify:user");

    if (access_token && user) {
      return { access_token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const getCredentials = useCallback(async () => {
    const hashParams = {} as any;

    const query = window.location.search.replace("?", "");
    const entries = query.split("&");

    entries.forEach(entry => {
      const [key, value] = entry.split("=");
      hashParams[key] = value;
    });

    window.history.pushState("", "", "/artists");

    const { access_token } = hashParams;

    const response = await api.get("/me");

    localStorage.setItem("@Spotify:access_token", access_token);
    localStorage.setItem("@Spotify:user", JSON.stringify(response.data));

    setData({
      access_token,
      user: response.data,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Spotify:access_token");
    localStorage.removeItem("@Spotify:user");

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, getCredentials, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
