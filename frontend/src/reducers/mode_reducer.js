import { RECEIVE_MODE } from '../actions/mode_actions';

const modeReducer = (state = "submit", action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MODE:
      return action.mode;
      
    default:
      return state;
  }
}

export default modeReducer;