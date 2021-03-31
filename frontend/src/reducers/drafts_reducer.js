import { RECEIVE_DRAFTS, RECEIVE_DRAFT, REMOVE_DRAFT } from '../actions/draft_actions';

const draftsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case RECEIVE_DRAFTS:
      return toObject(action.drafts);

    case RECEIVE_DRAFT:
      nextState[action.draft._id] = action.draft
      return nextState;

    case REMOVE_DRAFT:
      delete nextState[action.draft._id];
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

export default draftsReducer;