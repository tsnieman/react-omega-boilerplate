// Basics
import { fork } from 'redux-saga/effects';

import errorsSagas from 'sagas/errors';
import githubSagas from 'sagas/github';
const sagas = [
  ...errorsSagas,
  ...githubSagas,
];

export default function* rootSaga() {
  yield sagas.map((saga) => fork(saga));
}
