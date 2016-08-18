import { combineReducers } from 'redux';

import github from './github';
import messages from './messages';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  app: combineReducers({
    messages,
  }),
  routing,
  github,
});

export default rootReducer;
