import { RECEIVE_ESSAYS, RECEIVE_ESSAY, REMOVE_ESSAY } from '../actions/essay_actions';

const essaysReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case RECEIVE_ESSAYS:
      return toObject(action.essays);

    case RECEIVE_ESSAY:
      nextState[action.essay._id] = action.essay
      return nextState;

    case REMOVE_ESSAY:
      delete nextState[action.essay._id];
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

export default essaysReducer;