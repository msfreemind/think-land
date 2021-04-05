import { connect } from 'react-redux';
import { fetchEssay } from '../../actions/essay_actions';
import EssayShow from './essay_show';

const mapStateToProps = (state, ownProps) => ({
  essay: state.entities.essays[ownProps.match.params.essayId],
  showReviews: true
});

const mapDispatchToProps = dispatch => ({
  fetchEssay: essayId => dispatch(fetchEssay(essayId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayShow);