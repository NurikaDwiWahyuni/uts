// Router.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Beranda from './dash';
import Login from '.';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/beranda" component={Beranda} />
        <Redirect from="/" to="/beranda" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
