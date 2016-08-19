import { ACTIONS as MESSAGES_ACTIONS } from 'constants/messages';

// Helpers
import shortid from 'shortid';

export function createMessage({ body, variant }) {
  return {
    type: MESSAGES_ACTIONS.CREATE_MESSAGE,
    id: shortid.generate(),
    body,
    variant,
  };
}

export function removeMessage(id, options = {}) {
  return {
    type: MESSAGES_ACTIONS.REMOVE_MESSAGE,
    id,
    options,
  };
}

export function createErrorMessage(error, options = {}) {
  return createMessage({
    ...options, // before explicitly defined key-values so options can't overwrite
    body: error.message,
    variant: 'negative',
  });
}
