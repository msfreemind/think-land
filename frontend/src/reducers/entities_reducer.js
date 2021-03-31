import { combineReducers } from 'redux';
import essaysReducer from './essays_reducer';
import draftsReducer from './drafts_reducer';
import activeDraftReducer from './active_draft_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  essays: essaysReducer,
  drafts: draftsReducer,
  activeDraft: activeDraftReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;