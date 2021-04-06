import { connect } from 'react-redux';
import { fetchEssay } from '../../actions/essay_actions';
import { setMode } from '../../actions/mode_actions';
import { createReview, updateReview, clearActiveReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.reviews,
  essay: state.entities.essays[ownProps.match.params.essayId],
  review: state.entities.activeReview,
  actionType: "new"
});

const mapDispatchToProps = dispatch => ({
  fetchEssay: essayId => dispatch(fetchEssay(essayId)),
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  clearActiveReview: () => dispatch(clearActiveReview()),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);