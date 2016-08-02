// Basics
import { fork } from 'redux-saga/effects';

import githubSagas from 'sagas/github';
const sagas = [
  ...githubSagas,
];

export default function* rootSaga() {
  yield sagas.map((saga) => fork(saga));
}
