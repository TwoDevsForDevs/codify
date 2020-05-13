import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Callback from "../pages/Callback";
import SignIn from "../pages/SignIn";
import Error from "../pages/Error";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/callback/:access_token" component={Callback} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/error" component={Error} />
    </Switch>
  );
};

export default Routes;
