import { combineReducers } from 'redux';

import entities from './entities';
import messages from './messages';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  app: combineReducers({
    routing,
    messages,
  }),
  entities,
});

export default rootReducer;
