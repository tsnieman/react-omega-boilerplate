// Basics
import { takeLatest } from 'redux-saga';
import { put, call, cancelled } from 'redux-saga/effects';
import actions from 'actions';

// Constants
import { ACTIONS as GITHUB_ACTIONS } from 'constants/github';

// Helpers
import fetch from 'helpers/fetch';

export function* getUser(action) {
  try {
    const { username, options } = action;

    const fetchedUser = yield call(fetch, `https://api.github.com/users/${username}`, {
      method: 'GET',
      headers: {
        // Accept header as per https://developer.github.com/v3/#current-version
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
    });

    // TODO verify successful fetch?

    if (options.onSuccess) options.onSuccess(fetchedUser);

    yield put(actions.github.setUser(fetchedUser));
  } catch (err) {
    // TODO?
    // yield put(ErrorAction())
    console.log('yield put(ErrorAction())', err); // eslint-disable-line no-console
  } finally {
    if (yield cancelled()) {
      // TODO?
      // yield put(CancelledAction())
      console.log('cancelled getUser'); // eslint-disable-line no-console
    }
  }
}

export default function* watchGetUser() {
  yield* takeLatest(GITHUB_ACTIONS.GET_USER, getUser);
}
