import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from 'helpers/history';
import { App } from './App';

const target = document.getElementById('root');
if (target) {
  render(
    <Router history={history}>
      <App />
    </Router>,
    target
  );
}
