import { expect } from 'chai';

import actions from 'actions';
import { ACTIONS as GITHUB_ACTIONS } from 'constants/github';

describe('Github action creators', () => {
  it('GITHUB_ACTIONS.GET_USER should create an action to get a user', () => {
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
})
