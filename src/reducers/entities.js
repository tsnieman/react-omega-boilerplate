// Constants
import {
  ACTIONS as ENTITIES_ACTIONS,
} from 'constants/entities';

const INITIAL_STATE = {
  users: {},
};

const reducers = {
  [ENTITIES_ACTIONS.SET_ENTITIES]: (state, action) => (
    Object.assign({}, state, action.entities)
  ),
};

export default function map(state = INITIAL_STATE, action) {
  const reducer = reducers[action.type];
  if (reducer) return reducer(state, action);

  return state;
}
