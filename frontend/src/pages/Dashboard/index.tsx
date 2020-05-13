import React, { useEffect } from "react";

import api from "../../services/api";

const Dashboard: React.FC = () => {
  useEffect(() => {
    async function loadUser(): Promise<void> {
      const response = await api.get("/users");

      console.log(response.data);
    }

    loadUser();
  }, []);

  return <h1>dashboard</h1>;
};

export default Dashboard;
