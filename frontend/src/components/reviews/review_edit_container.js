import { connect } from 'react-redux';
import { setMode } from '../../actions/mode_actions';
import { updateReview, fetchReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.reviews,
  review: state.entities.reviews[ownProps.match.params.reviewId],
  actionType: "edit"
});

const mapDispatchToProps = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  updateReview: review => dispatch(updateReview(review)),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);