import { expect } from 'chai';

import actions from 'actions';
import { ACTIONS as GITHUB_ACTIONS } from 'constants/github';

describe('Github action creators', () => {
  it('should create an action to get a user', () => {
    const username = 'tsnieman';

    const expectedAction = {
      type: GITHUB_ACTIONS.GET_USER,
      username,
    };

    const action = actions.github.getUser('tsnieman')

    expect(action).to.deep.equal({
      type: 'GET_USER',
      username,
      options: {},
    });
  });

  it('should create an action to set a user', () => {
    const user = {
      'id': 1234,
    };

    const expectedAction = {
      type: GITHUB_ACTIONS.SET_USER,
      user,
    };

    const action = actions.github.setUser(user)

    expect(action).to.deep.equal({
      type: 'SET_USER',
      user,
    });
  });
})
