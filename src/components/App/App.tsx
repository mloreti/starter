import * as React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';

export default () => (
  <Provider store={store}>
    <h1>Hello world</h1>
  </Provider>
)
