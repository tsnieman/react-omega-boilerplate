import { ACTIONS as MESSAGES_ACTIONS } from 'constants/messages';

// Helpers
import shortid from 'shortid';

export function createMessage(body, options = {}) {
  return {
    type: MESSAGES_ACTIONS.CREATE_MESSAGE,
    id: shortid.generate(),
    body,
    options,
  };
}

export function removeMessage(id, options = {}) {
  return {
    type: MESSAGES_ACTIONS.REMOVE_MESSAGE,
    id,
    options,
  };
}
