// Constants
import {
  ACTIONS as GITHUB_ACTIONS,
} from 'constants/github';

const INITIAL_STATE = {
  users: {},
};

const reducers = {
  [GITHUB_ACTIONS.SET_USER]: (state, action) => ({
    ...state,
    users: {
      ...state.users,
      // TODO use ID instead? then how do i efficiently pull a user by 'login' (username)?
      [action.user.login]: action.user,
    },
  }),
};

export default function map(state = INITIAL_STATE, action) {
  const reducer = reducers[action.type];
  if (reducer) return reducer(state, action);

  return state;
}
