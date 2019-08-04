import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history } from 'helpers/history';
import { App } from './App';

import { store } from './redux/store';

const target = document.getElementById('root');
if (target) {
  ReactDom.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    target
  );
}
