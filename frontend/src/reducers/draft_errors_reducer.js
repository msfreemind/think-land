import {
  RECEIVE_DRAFT_ERRORS, 
  RECEIVE_DRAFTS,
  RECEIVE_DRAFT,
  REMOVE_DRAFT
} from '../actions/draft_actions';

const _nullErrors = {};

const draftErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DRAFT_ERRORS:
      return action.errors;

    case RECEIVE_DRAFTS:
    case RECEIVE_DRAFT:
    case REMOVE_DRAFT:
      return _nullErrors;

    default:
      return state;
  }
};

export default draftErrorsReducer;