import { expect } from 'chai';

import actions from 'actions';
import { ACTIONS as MESSAGES_ACTIONS } from 'constants/messages';

describe('Github action creators (actions.messages)', () => {
  it('createMessage should create an action to add a message', () => {
    const body = 'test body';

    const expectedAction = {
      type: MESSAGES_ACTIONS.CREATE_MESSAGE,
      body,
    };

    const action = actions.messages.createMessage({ body });

    expect(action.type).to.equal(expectedAction.type);
    expect(action.body).to.equal(expectedAction.body);
    expect(action.variant).to.equal(expectedAction.variant);
    expect(action.id.length).to.be.above(1); // generated
  });

  it('createMessage should set action.variant when provided a variant', () => {
    const body = 'test body';
    const variant = 'positive';

    const expectedAction = {
      type: MESSAGES_ACTIONS.CREATE_MESSAGE,
      body,
      variant,
    };

    const action = actions.messages.createMessage({ body, variant });

    expect(action.type).to.equal(expectedAction.type);
    expect(action.body).to.equal(expectedAction.body);
    expect(action.variant).to.equal(expectedAction.variant);
    expect(action.id.length).to.be.above(1); // generated
  });

  it('removeMessage should create an action to remove a message', () => {
    const id = 'abc123';

    const expectedAction = {
      type: MESSAGES_ACTIONS.REMOVE_MESSAGE,
      id,
    };

    const action = actions.messages.removeMessage(id);

    expect(action.type).to.equal(expectedAction.type);
    expect(action.id).to.equal(id);
  });

  it('createErrorMessage should create a MESSAGES_ACTIONS.CREATE_MESSAGE action to add a message', () => {
    var text = 'Test error message';
    const error = new Error(text);

    const expectedAction = {
      type: MESSAGES_ACTIONS.CREATE_MESSAGE,
      body: text,
      variant: 'negative',
    };

    const action = actions.messages.createErrorMessage(error);

    expect(action.type).to.equal(expectedAction.type);
    expect(action.body).to.equal(expectedAction.body);
    expect(action.variant).to.equal(expectedAction.variant);
    expect(action.id.length).to.be.above(1); // generated
  });
})
