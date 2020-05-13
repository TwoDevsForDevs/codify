import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import api from "../../services/api";
import history from "../../services/history";

interface IAuthParams {
  access_token: string;
}

const Callback: React.FC = () => {
  const { params } = useRouteMatch<IAuthParams>();

  const { access_token } = params;

  useEffect(() => {
    async function setToken(): Promise<void> {
      if (access_token) {
        api.defaults.headers.Authorization = `Bearer ${access_token}`;

        // const response = await api.get("/me");

        // console.log(response.data);
        //
      }
    }

    setToken();
  }, [access_token]);

  history.push("/dashboard");

  return <h1>xD</h1>;
};

export default Callback;
