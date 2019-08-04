import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from 'components/ProtectedRoute';

import { SignIn as AuthPage } from 'Pages/SignIn';
import { Todo as TodoPage } from 'Pages/Todo';

export const App = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={TodoPage} />
      <Route path="/sign-in/" component={AuthPage} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
};
