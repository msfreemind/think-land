import { combineReducers } from 'redux';
import essaysReducer from './essays_reducer';
import reviewablesReducer from './reviewables_reducer';
import draftsReducer from './drafts_reducer';
import activeDraftReducer from './active_draft_reducer';
import reviewsReducer from './reviews_reducer';
import categoriesReducer from './categories_reducer';
import activeReviewReducer from './active_review_reducer';

const entitiesReducer = combineReducers({
  essays: essaysReducer,
  reviewables: reviewablesReducer,
  drafts: draftsReducer,
  activeDraft: activeDraftReducer,
  reviews: reviewsReducer,
  categories: categoriesReducer,
  activeReview: activeReviewReducer
});

export default entitiesReducer;