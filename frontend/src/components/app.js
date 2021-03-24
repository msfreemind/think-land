import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import EssayIndex from './essays/essay_index';

const App = () => (
  <Switch>
    <Route exact path="/" component={EssayIndex} />
  </Switch>
);

export default App;