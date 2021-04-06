import { connect } from 'react-redux';
import { setMode } from '../../actions/mode_actions';
import { fetchReviews } from '../../actions/review_actions';
import { draftReviews } from '../../reducers/selectors';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
  reviews: draftReviews(Object.values(state.entities.reviews)),
  indexType: "draft"
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);