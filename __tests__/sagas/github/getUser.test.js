import { expect } from 'chai';

import { takeLatest } from 'redux-saga';
import { put, call, take, fork } from 'redux-saga/effects';

import { ACTIONS as GITHUB_ACTIONS } from 'constants/github';
import { getUser, default as watchGetUser } from 'sagas/github/getUser';

// Props to https://github.com/yelouafi/redux-saga/issues/318#issuecomment-228790459
// this comment for the saga testing example/explanation.

describe('Github getUser Saga', () => {
  let iterator;
  let actualYield;
  let expectedYield;
  const fakeAction = {
    type: GITHUB_ACTIONS.GET_USER,
    username: 'tsnieman',
  };

  iterator = watchGetUser();

  // `takeEvery` first does a `TAKE` on the action you give it
  // TODO but this one uses takeLatest
  it('should take on the latest GET_USER action', () => {
    actualYield = iterator.next().value;
    expectedYield = take(GITHUB_ACTIONS.GET_USER);
    expect(actualYield).to.deep.equal(expectedYield);
  });

  // It then does `FORK` on the handler you gave it
  it('should fork the saga handler with the action', () => {
    // The saga is now waiting for a `TAKE` action, so we send a fake on through.
    actualYield = iterator.next(fakeAction).value;
    expectedYield = fork(getUser, fakeAction);
    expect(actualYield).to.deep.equal(expectedYield);
  });

  // Then loops back around to start doing `TAKE` actions again
  // and continues indefinitely in this cycle.
  it('should return to capturing the GET_USER action', () => {
	  actualYield = iterator.next().value;
    expectedYield = take(GITHUB_ACTIONS.GET_USER);
    expect(actualYield).to.deep.equal(expectedYield);
  });

  it('should error if undefined action.username', () => {
    const generator = getUser({});
    const value = generator.next().value;
    expect(value.name).to.contain('Error');
    expect(value.message).to.contain('username');
  });

  // TODO verify that this saga:
  // - gets user via fetch/request,
  // - runs onSuccess fn if provided
  // - does put(setUser(...))
  // - (saga) cancellation maybe?
});
