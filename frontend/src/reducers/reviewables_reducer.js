import { RECEIVE_REVIEWABLE_ESSAYS } from '../actions/essay_actions';

const reviewablesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEWABLE_ESSAYS:
      return toObject(action.essays);
      
    default:
      return state;
  }
};

const toObject = array => {
  let object = {};

  array.forEach(item => object[item._id] = item);

  return object;
};

export default reviewablesReducer;