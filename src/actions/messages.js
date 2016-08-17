import { ACTIONS as MESSAGES_ACTIONS } from 'constants/messages';

export function addMessage(body, options = {}) {
  return {
    type: MESSAGES_ACTIONS.ADD_MESSAGE,
    body,
    options,
  };
}
