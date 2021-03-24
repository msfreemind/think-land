import { combineReducers } from 'redux';
import essaysReducer from './essays_reducer';

const entitiesReducer = combineReducers({
  essays: essaysReducer
});

export default entitiesReducer;