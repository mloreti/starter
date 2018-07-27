import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";

import store from '../../store';
import { history } from '../../store';
import Routes from '../Routes';
import './App.css';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)
