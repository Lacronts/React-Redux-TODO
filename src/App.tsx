import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from 'components/ProtectedRoute';

import { SignInContainer as SignInPage } from 'containers/SignInContainer';
import { SignUpContainer as SignUpPage } from 'containers/SignUpContainer';
import { Todo as TodoPage } from 'Pages/Todo';

export const App = () => {
  return (
    <Switch>
      <ProtectedRoute exact path='/' component={TodoPage} />
      <Route path='/sign-in/' component={SignInPage} />
      <Route path='/sign-up/' component={SignUpPage} />
      <Route path='*' render={() => <Redirect to='/' />} />
    </Switch>
  );
};
