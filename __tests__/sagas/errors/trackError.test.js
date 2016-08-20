import { expect } from 'chai';

import { takeLatest } from 'redux-saga';
import { put, call, take, fork } from 'redux-saga/effects';

import { ACTIONS as ERRORS_ACTIONS } from 'constants/errors';
import { trackError, default as watchTrackError } from 'sagas/errors/trackError';

// Props to https://github.com/yelouafi/redux-saga/issues/318#issuecomment-228790459
// this comment for the saga testing example/explanation.

describe('Errors trackError Saga', () => {
  let iterator;
  let actualYield;
  let expectedYield;
  const fakeAction = {
    type: ERRORS_ACTIONS.TRACK_ERROR,
    username: 'tsnieman',
  };

  iterator = watchTrackError();

  // `takeEvery` first does a `TAKE` on the action you give it
  it('should take every TRACK_ERROR action', () => {
    actualYield = iterator.next().value;
    expectedYield = take(ERRORS_ACTIONS.TRACK_ERROR);
    expect(actualYield).to.deep.equal(expectedYield);
  });

  // It then does `FORK` on the handler you gave it
  it('should fork the saga handler with the action', () => {
    // The saga is now waiting for a `TAKE` action, so we send a fake on through.
    actualYield = iterator.next(fakeAction).value;
    expectedYield = fork(trackError, fakeAction);
    expect(actualYield).to.deep.equal(expectedYield);
  });

  // Then loops back around to start doing `TAKE` actions again
  // and continues indefinitely in this cycle.
  it('should return to capturing the TRACK_ERROR action', () => {
	  actualYield = iterator.next().value;
    expectedYield = take(ERRORS_ACTIONS.TRACK_ERROR);
    expect(actualYield).to.deep.equal(expectedYield);
  });

  it('should error if undefined action.errors', () => {
    const generator = trackError({});
    const value = generator.next().value;
    expect(value.name).to.contain('Error');
    expect(value.message).to.contain('No error provided');
  });

  // TODO verify that other parts of the generator/yields happen
  // i.e. that options work (trigger createErrorMessage action), etc
});
