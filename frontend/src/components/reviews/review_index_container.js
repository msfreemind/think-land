import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import { submittedReviews } from '../../reducers/selectors';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
  reviews: submittedReviews(Object.values(state.entities.reviews)),
  indexType: "submitted"
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);