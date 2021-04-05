import { connect } from 'react-redux';
import { fetchReview } from '../../actions/review_actions';
import { fetchEssay } from '../../actions/essay_actions';
import ReviewShow from './review_show';

const mapStateToProps = (state, ownProps) => ({
  review: state.entities.reviews[ownProps.match.params.reviewId]
});

const mapDispatchToProps = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  fetchEssay: essayId => dispatch(fetchEssay(essayId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow);