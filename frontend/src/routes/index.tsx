import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Artists from "../pages/Artists";
import Error from "../pages/Error";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/artists" component={Artists} />
      {/* <Route path="/favorite_tracks" component={Artists} />
      <Route path="/playlists" component={Artists} /> */}

      <Route path="/error" component={Error} />
    </Switch>
  );
};

export default Routes;
