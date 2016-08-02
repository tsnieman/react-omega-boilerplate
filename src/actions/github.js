import { ACTIONS as GITHUB_ACTIONS } from 'constants/github';

export function getUser(username, options = {}) {
  return {
    type: GITHUB_ACTIONS.GET_USER,
    username,
    options,
  };
}

export function setUser(user) {
  return {
    type: GITHUB_ACTIONS.SET_USER,
    user,
  };
}
