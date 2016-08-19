import { expect } from 'chai';

import messagesReducer from 'reducers/messages';

import { ACTIONS as MESSAGES_ACTIONS } from 'constants/messages';

describe('Messages reducers', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const state = messagesReducer(initialState, {});

    expect(state).to.deep.equal({});
  });

  it('should handle CREATE_MESSAGE', () => {
    const initialState = {};
    const body = 'test body';

    const state = messagesReducer(initialState, {
      type: MESSAGES_ACTIONS.CREATE_MESSAGE,
      body,
    });

    expect(Object.keys(state).length).to.equal(1);
    const addedMessageId = Object.keys(state)[0]; // because id is generated
    expect(state[addedMessageId].body).to.equal(body);
    expect(state[addedMessageId].hasOwnProperty('id')).to.equal(true);
  });

  it('should handle CREATE_MESSAGE with specified variant', () => {
    const initialState = {};
    const body = 'test body';
    const variant = 'positive';

    const state = messagesReducer(initialState, {
      type: MESSAGES_ACTIONS.CREATE_MESSAGE,
      body,
      variant,
    });

    expect(Object.keys(state).length).to.equal(1);
    const addedMessageId = Object.keys(state)[0]; // because id is generated
    expect(state[addedMessageId].body).to.equal(body);
    expect(state[addedMessageId].variant).to.equal(variant);
    expect(state[addedMessageId].hasOwnProperty('id')).to.equal(true);
  });

  it('should handle REMOVE_MESSAGE', () => {
    const FAKE_MESSAGES = {
      abc123: {
        id: 'abc123',
        body: 'test body'
      },
      xyz789: {
        id: 'xyz789',
        body: 'body test'
      },
    };

    const initialState = FAKE_MESSAGES;

    const state = messagesReducer(initialState, {
      type: MESSAGES_ACTIONS.REMOVE_MESSAGE,
      id: FAKE_MESSAGES['abc123'].id,
    });

    expect(state['abc123']).to.not.exist;
    expect(state['xyz789'].body).to.equal(FAKE_MESSAGES['xyz789'].body);
  });

  // TODO more CREATE_MESSAGE and REMOVE_MESSAGE tests... better TDD in general :/
})
