import { combineReducers } from 'redux';

import map from './map';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  map,
});

export default rootReducer;
