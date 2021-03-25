import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return toObject(action.reviews);

    case RECEIVE_REVIEW:
      nextState[action.review._id] = action.review
      return nextState;

    case REMOVE_REVIEW:
      delete nextState[action.review._id];
      return nextState;
      
    default:
      return state;
  }
};

const toObject = array => {
  let object = {};

  array.forEach(item => object[item._id] = item);

  return object;
};

export default reviewsReducer;