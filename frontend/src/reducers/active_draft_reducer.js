import { RECEIVE_DRAFT, CLEAR_ACTIVE_DRAFT } from '../actions/draft_actions';

const initialState = {};

const activeDraftReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DRAFT:
      return action.draft;
      
    case CLEAR_ACTIVE_DRAFT:
      return initialState;

    default:
      return state;
  }
};

export default activeDraftReducer;