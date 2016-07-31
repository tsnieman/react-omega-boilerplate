import { combineReducers } from 'redux';

import github from './github';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  github,
});

export default rootReducer;
