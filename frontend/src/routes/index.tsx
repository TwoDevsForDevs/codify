import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from "./Route";

import SignIn from '../pages/SignIn';
import Authenticate from '../pages/Authenticate';

import Artists from '../pages/Artists';
import Error from '../pages/Error';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/spotify-authentication" exact component={Authenticate} />

      <Route path="/top-artists" exact component={Artists} />

      <Route path="/error" component={Error} />
    </Switch>
  );
};

export default Routes;
