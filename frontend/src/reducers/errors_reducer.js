import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import essayErrorsReducer from './essay_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';
import draftErrorsReducer from './draft_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  essays: essayErrorsReducer,
  reviews: reviewErrorsReducer,
  drafts: draftErrorsReducer
});

export default errorsReducer;