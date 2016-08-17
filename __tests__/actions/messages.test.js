import { expect } from 'chai';

import actions from 'actions';
import { ACTIONS as MESSAGES_ACTIONS } from 'constants/messages';

describe('Github action creators', () => {
  it('MESSAGES_ACTIONS.ADD_MESSAGE should create an action to add a message', () => {
    const body = 'test body';

    const expectedAction = {
      type: MESSAGES_ACTIONS.ADD_MESSAGE,
      body,
    };

    const action = actions.messages.addMessage(body);

    expect(action).to.deep.equal({
      type: 'ADD_MESSAGE',
      body: 'test body',
      options: {},
    });
  });
})
