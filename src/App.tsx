import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ProtectedRoute } from 'components/ProtectedRoute';

import { Header } from 'components/Header';
import { SignInContainer as SignInPage } from 'containers/SignInContainer';
import { SignUpContainer as SignUpPage } from 'containers/SignUpContainer';
import { Todo as TodoPage } from 'Pages/Todo';

import { isAuthenticated } from 'helpers/auth';

const Main = () => {
  return (
    <main>
      {isAuthenticated() && <Header />}
      <Switch>
        <ProtectedRoute exact path='/' component={TodoPage} />
        <Route path='/sign-in/' component={SignInPage} />
        <Route path='/sign-up/' component={SignUpPage} />
        <Route path='*' render={() => <Redirect to='/' />} />
      </Switch>
    </main>
  );
};

export const App = withRouter(Main);
