// Basics
import { takeEvery } from 'redux-saga';
import { put, call, cancelled } from 'redux-saga/effects';
import actions from 'actions';
import services from 'services';
import delay from 'helpers/delay';

// Constants
import { ACTIONS as GITHUB_ACTIONS } from 'constants/github';
// import { ACTIONS as ENTITIES_ACTIONS } from 'constants/entities';
import { SCHEMAS } from 'constants/entities';

import { fetchEntity } from 'sagas/entities/fetchEntity';

export function* getUser(action = {}) {
  try {
    const {
      username,
      options,
    } = action;

    if (!username) throw new Error('No username provided');

    // For illustrative effect of the "Loading" state of components/GithubUser
    yield call(delay, 1000);

    const fetchedUser = yield* fetchEntity({
      service: () => services.github.fetchUser(username),
      schema: SCHEMAS.USER,
    });

    console.log({ fetchedUser });

    // success callback
    if (options.onSuccess) options.onSuccess(fetchedUser);
  } catch (err) {
    // TODO is test-only error-yielding a good choice?
    if (process.env.NODE_ENV === 'test') yield err;

    const { options } = action;

    // adds the error to the app messages
    if (options.errorMessage) yield put(actions.errors.trackError(err, { errorMessage: true }));

    // failure callback
    if (options.onFailure) options.onFailure(err);
  } finally {
    // console.log('this runs after try (including/regardless of if the error was caught)');

    if (yield cancelled()) {
      // Action was cancelled.
      console.log('cancelled getUser'); // eslint-disable-line no-console
    }
  }
}

export default function* watchGetUser() {
  yield* takeEvery(GITHUB_ACTIONS.GET_USER, getUser);
}
