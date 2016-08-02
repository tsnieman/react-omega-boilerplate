import { expect } from 'chai';

import githubReducer from 'reducers/github';

import { ACTIONS as GITHUB_ACTIONS } from 'constants/github';

describe('Github reducers', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const state = githubReducer(initialState, {});

    expect(state).to.deep.equal({
        users: {},
    });
  });

  it('should handle SET_USER', () => {
    const initialState = {};
    const user = { id: 1234 };

    const state = githubReducer(initialState, {
      type: GITHUB_ACTIONS.SET_USER,
      user,
    });

    expect(state).to.deep.equal({
      users: {
        [user.id]: user,
      },
    });
  });
})
