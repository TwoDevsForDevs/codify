import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Authenticate from '../pages/Authenticate';

import Artists from '../pages/Artists';
import Playlists from '../pages/Playlists';
import FavoriteTracks from '../pages/FavoriteTracks';

import Error from '../pages/Error';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/spotify-authentication" component={Authenticate} />

      <Route path="/top-artists" component={Artists} isPrivate />
      <Route path="/playlists" component={Playlists} isPrivate />
      <Route path="/favorite-tracks" component={FavoriteTracks} isPrivate />

      <Route path="/error" component={Error} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default Routes;
