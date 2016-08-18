// Constants
import {
  ACTIONS as MESSAGES_ACTIONS,
} from 'constants/messages';

const INITIAL_STATE = {};

const reducers = {
  [MESSAGES_ACTIONS.CREATE_MESSAGE]: (state, action) => ({
    ...state,
    [action.id]: {
      id: action.id,
      body: action.body,
    },
  }),

  [MESSAGES_ACTIONS.REMOVE_MESSAGE]: (state, action) => {
    const newState = { ...state };
    delete newState[action.id];
    return newState;
  },
};

export default function map(state = INITIAL_STATE, action) {
  const reducer = reducers[action.type];
  if (reducer) return reducer(state, action);

  return state;
}
