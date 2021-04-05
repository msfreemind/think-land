import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import { draftReviews } from '../../reducers/selectors';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
  reviews: draftReviews(Object.values(state.entities.reviews)),
  indexType: "draft"
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);