/* eslint-disable import/prefer-default-export */

import { ACTIONS as ERRORS_ACTIONS } from 'constants/errors';

// Helpers
import shortid from 'shortid';

export function trackError(error, options = {}) {
  return {
    type: ERRORS_ACTIONS.TRACK_ERROR,
    id: shortid.generate(),
    error,
    options,
  };
}

/* eslint-enable import/prefer-default-export */
