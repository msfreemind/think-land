import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const CLEAR_ACTIVE_REVIEW = "CLEAR_ACTIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

// sync action creators

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const clearActiveReview = () => ({
  type: CLEAR_ACTIVE_REVIEW
});

export const receiveErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

// async action creators

export const fetchReviews = () => dispatch => {
  return APIUtil.getReviews().then(
    res => dispatch(receiveReviews(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};

export const fetchReview = reviewId => dispatch => {
  return APIUtil.getReview(reviewId).then(
    res => dispatch(receiveReview(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};

export const createReview = review => dispatch => {
  return APIUtil.postReview(review).then(
    res => dispatch(receiveReview(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};

export const updateReview = review => dispatch => {
  return APIUtil.putReview(review).then(
    res => dispatch(receiveReview(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};

export const destroyReview = reviewId => dispatch => {
  return APIUtil.deleteReview(reviewId).then(
    res => dispatch(removeReview(res.data)), 
    err => dispatch(receiveErrors(err.response.data))
  );
};