import React from "react";
import { Switch, Route } from "react-router-dom";

// import Route from "./Route";

import SignIn from "../pages/SignIn";
import Artists from "../pages/Artists";
import Error from "../pages/Error";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/artists" component={Artists} isPrivate />
      <Route path="/favorite_tracks" component={Artists} isPrivate />
      <Route path="/playlists" component={Artists} isPrivate />

      <Route path="/error" component={Error} />
    </Switch>
  );
};

export default Routes;
