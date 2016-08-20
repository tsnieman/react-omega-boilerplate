// Basics
import { takeEvery } from 'redux-saga';
import { put, cancelled } from 'redux-saga/effects';
import actions from 'actions';
// import services from 'services';

// Constants
import { ACTIONS as ERRORS_ACTIONS } from 'constants/errors';

export function* trackError(action = {}) {
  try {
    const { error, options } = action;

    if (!error) throw new Error('No error provided');

    // adds the error to the app messages
    if (options.errorMessage) yield put(actions.messages.createErrorMessage(error));

    // TODO here's where we could track ALL of
    // the errors that occur in the app.
    // for example, one might...
    // - track the errors via analytics/service
    // - track the errors in the store
    // - use errors to trigger bug reports
  } catch (err) {
    // TODO is test-only error-yielding a good choice?
    if (process.env.NODE_ENV === 'test') yield err;

    const { options } = action;

    // adds the error to the app messages
    // TODO add comical "error tracking caused error" message.
    if (options.errorMessage) yield put(actions.messages.createErrorMessage(err));

    // failure callback
    if (options.onFailure) options.onFailure(err);
  } finally {
    // console.log('this runs after try (including/regardless of if the error was caught)');

    if (yield cancelled()) {
      // Action was cancelled.
      console.log('cancelled trackError'); // eslint-disable-line no-console
    }
  }
}

export default function* watchTrackError() {
  yield* takeEvery(ERRORS_ACTIONS.TRACK_ERROR, trackError);
}
