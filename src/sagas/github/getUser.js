// Basics
import { takeLatest } from 'redux-saga';
import { put, call, cancelled } from 'redux-saga/effects';
import actions from 'actions';
import services from 'services';
import delay from 'helpers/delay';

// Constants
import { ACTIONS as GITHUB_ACTIONS } from 'constants/github';

export function* getUser(action = {}) {
  try {
    if (!action.username) throw new Error('No username provided');

    const { username, options } = action;

    // For illustrative effect of the "Loading" state of components/GithubUser
    yield call(delay, 1500);

    const fetchedUser = yield call(services.github.fetchUser, username);

    // TODO verify successful fetch?

    if (options.onSuccess) options.onSuccess(fetchedUser);

    yield put(actions.github.setUser(fetchedUser));
  } catch (err) {
    // TODO error action for in-browser feedback.
    // yield put(ErrorAction())
    // console.log('yield put(ErrorAction())', err); // eslint-disable-line no-console

    // TODO is test-only error-yielding a good choice?
    if (process.env.NODE_ENV === 'test') yield err;
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
