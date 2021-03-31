import { RECEIVE_REVIEW, CLEAR_ACTIVE_REVIEW } from '../actions/review_actions';

const initialState = {};

const activeReviewReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      return action.review;
      
    case CLEAR_ACTIVE_REVIEW:
      return initialState;

    default:
      return state;
  }
};

export default activeReviewReducer;