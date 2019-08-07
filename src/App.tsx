import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from 'components/ProtectedRoute';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Header } from 'components/Header';
import { SignInContainer as SignInPage } from 'containers/SignInContainer';
import { SignUpContainer as SignUpPage } from 'containers/SignUpContainer';
import { TodoContainer as TodoPage } from 'containers/TodoContainer';

import { isAuthenticated } from 'helpers/auth';
import { history } from 'helpers/history';

type Props = {
  clearAlerts(): void;
};

export const App = ({ clearAlerts }: Props) => {
  useEffect(() => {
    history.listen(() => clearAlerts());
  }, []);
  return (
    <main>
      <CssBaseline />
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
