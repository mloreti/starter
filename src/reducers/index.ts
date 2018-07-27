import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sampleReducer from './sampleReducer';

export default combineReducers({
  sampleReducer,
  router: routerReducer
})
