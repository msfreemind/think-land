import {
  RECEIVE_ESSAY_ERRORS, 
  RECEIVE_ESSAYS,
  RECEIVE_ESSAY,
  REMOVE_ESSAY
} from '../actions/essay_actions';

const _nullErrors = {};

const essayErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ESSAY_ERRORS:
      return action.errors;

    case RECEIVE_ESSAYS:
    case RECEIVE_ESSAY:
    case REMOVE_ESSAY:
      return _nullErrors;

    default:
      return state;
  }
};

export default essayErrorsReducer;