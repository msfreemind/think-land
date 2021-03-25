import axios from 'axios';

export const getReviews = () => {
  return axios.get('/api/reviews');
};

export const getReview = reviewId => {
  return axios.get(`/api/reviews/${reviewId}`);
};

export const postReview = review => {
  return axios.post('/api/reviews', review);
};

export const putReview = review => {
  return axios.put(`/api/reviews/${review.id}`, review);
};

export const deleteReview = reviewId => {
  return axios.delete(`/api/reviews/${reviewId}`);
};