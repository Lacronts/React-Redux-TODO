import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isAuthenticated } from 'helpers/auth';

export const ProtectedRoute = (props: RouteProps) =>
  isAuthenticated() ? <Route {...props} /> : <Redirect to="/sign-in/" />;
