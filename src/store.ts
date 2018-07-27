import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";

import rootReducer from './reducers'

const preloadedState = {};
export const history = createHistory();

export default createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunk),
  ),
);
