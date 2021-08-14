import React from 'react';
import Layout from 'components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFoundPage from 'pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path='/app'>
        <Layout />
      </Route>
      <Route exact path='/'>
        <Redirect to='/app' />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default Routes;
