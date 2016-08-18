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

    expect(action.type).to.equal('ADD_MESSAGE');
    expect(action.body).to.equal(body);
    expect(action.options).to.deep.equal({});
    expect(action.id.length).to.be.above(1);
  });

  it('MESSAGES_ACTIONS.REMOVE_MESSAGE should create an action to remove a message', () => {
    const id = 'abc123';

    const expectedAction = {
      type: MESSAGES_ACTIONS.REMOVE_MESSAGE,
      id,
    };

    const action = actions.messages.removeMessage(id);

    expect(action.type).to.equal('REMOVE_MESSAGE');
    expect(action.id).to.equal(id);
    expect(action.options).to.deep.equal({});
  });
})
