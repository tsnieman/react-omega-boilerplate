// Basics
import { takeLatest } from 'redux-saga';
import { put, call, cancelled } from 'redux-saga/effects';
import actions from 'actions';

// Constants
import { ACTIONS as MAP_ACTIONS } from 'constants/map';

// Helpers
import fetch from 'helpers/fetch';

export function* createMap(action) {
  try {
    const { map, options } = action;

    const newMap = yield call(fetch, 'http://localhost:4201/maps', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(map),
    });

    // TODO i should probably be verifying that
    // the calls return successfully in (all) sagas...

    if (options.onSuccess) options.onSuccess(newMap);

    yield put(actions.map.setMap(newMap));
  } catch (err) {
    // TODO?
    // yield put(ErrorAction())
    console.log('yield put(ErrorAction())', err); // eslint-disable-line no-console
  } finally {
    if (yield cancelled()) {
      // TODO?
      // yield put(CancelledAction())
      console.log('cancelled createMap'); // eslint-disable-line no-console
    }
  }
}

export default function* watchCreateMap() {
  yield* takeLatest(MAP_ACTIONS.CREATE_MAP, createMap);
}
