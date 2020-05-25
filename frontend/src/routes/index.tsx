import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Artists from "../pages/Artists";
import SignIn from "../pages/SignIn";
import Error from "../pages/Error";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/artists" component={Artists} />
      <Route path="/error" component={Error} />
      <Route path="/playlists" component={Artists} isPrivate />

      <Route path="/error" component={Error} />
    </Switch>
  );
};

export default Routes;
