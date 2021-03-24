import { RECEIVE_ESSAYS, RECEIVE_ESSAY, REMOVE_ESSAY } from '../actions/essay_actions';

const essaysReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case RECEIVE_ESSAYS:
      return action.essays;

    case RECEIVE_ESSAY:
      return nextState.push(action.essay);

    case REMOVE_ESSAY:
      delete nextState[action.essay.id];
      return nextState;
      
    default:
      return state;
  }
};

export default essaysReducer;