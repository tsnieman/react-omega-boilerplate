// Basics
import { fork } from 'redux-saga/effects';

import entitiesSagas from 'sagas/entities';
import errorsSagas from 'sagas/errors';
import githubSagas from 'sagas/github';

const sagas = [
  ...entitiesSagas,
  ...errorsSagas,
  ...githubSagas,
];

export default function* rootSaga() {
  yield sagas.map((saga) => fork(saga));
}
