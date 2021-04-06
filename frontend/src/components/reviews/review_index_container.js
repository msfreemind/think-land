import { connect } from 'react-redux';
import { setMode } from '../../actions/mode_actions';
import { fetchReviews } from '../../actions/review_actions';
import { submittedReviews } from '../../reducers/selectors';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
  reviews: submittedReviews(Object.values(state.entities.reviews)),
  indexType: "submitted"
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);