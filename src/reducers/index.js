import { combineReducers } from 'redux';

import entities from './entities';
import messages from './messages';

const rootReducer = combineReducers({
  app: combineReducers({
    messages,
  }),
  entities,
});

export default rootReducer;
