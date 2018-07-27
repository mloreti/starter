import * as React from 'react';
import { Route } from "react-router";

import Home from './Home';

export default () => (
  <>
    <Route exact path="/" component={Home} />
  </>
);
