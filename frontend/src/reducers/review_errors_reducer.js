import {
  RECEIVE_REVIEW_ERRORS, 
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/review_actions';

const _nullErrors = {};

const reviewErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;

    case RECEIVE_REVIEWS:
    case RECEIVE_REVIEW:
    case REMOVE_REVIEW:
      return _nullErrors;

    default:
      return state;
  }
};

export default reviewErrorsReducer;