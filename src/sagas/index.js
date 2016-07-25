// Basics
import { fork } from 'redux-saga/effects';

import mapSagas from 'sagas/map';
const sagas = [
  ...mapSagas,
];

export default function* rootSaga() {
  yield sagas.map((saga) => fork(saga));
}
