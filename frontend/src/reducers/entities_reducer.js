import { combineReducers } from 'redux';
import essaysReducer from './essays_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  essays: essaysReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;