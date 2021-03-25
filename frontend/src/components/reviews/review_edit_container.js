import { connect } from 'react-redux';
import { updateReview, fetchReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  review: state.entities.reviews[ownProps.match.params.reviewId],
  actionType: "edit"
});

const mapDispatchToProps = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  processForm: review => dispatch(updateReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);