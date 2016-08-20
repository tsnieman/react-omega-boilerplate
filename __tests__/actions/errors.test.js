import { expect } from 'chai';

import actions from 'actions';
import { ACTIONS as ERRORS_ACTIONS } from 'constants/errors';

describe('Errors action creators (actions.errors)', () => {
  it('trackError should create an action to track an error', () => {
    const error = new Error('test error');

    const expectedAction = {
      type: ERRORS_ACTIONS.TRACK_ERROR,
      error,
      options: {},
    };

    const action = actions.errors.trackError(error);

    expect(action.type).to.equal(expectedAction.type);
    expect(action.error).to.be.an.instanceof(Error);
    expect(action.options).to.deep.equal(expectedAction.options);
    expect(action.id.length).to.be.above(1); // generated
  });
})
