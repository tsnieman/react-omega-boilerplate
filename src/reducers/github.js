// Constants
import {
  ACTIONS as GITHUB_ACTIONS,
} from 'constants/github';

const INITIAL_STATE = {
  users: {},
};

const actions = {
  [GITHUB_ACTIONS.SET_USER]: (state, action) => ({
    ...state,
    users: {
      ...state.users,
      [action.user.id]: action.user,
    },
  }),
};

export default function map(state = INITIAL_STATE, action) {
  const actionCreator = actions[action.type];
  if (actionCreator) return actionCreator(state, action);

  return state;
}
