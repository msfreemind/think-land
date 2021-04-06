import { connect } from 'react-redux';
import { fetchEssay } from '../../actions/essay_actions';
import { setMode } from '../../actions/mode_actions';
import EssayShow from './essay_show';

const mapStateToProps = (state, ownProps) => ({
  essay: state.entities.essays[ownProps.match.params.essayId],
  showReviews: true
});

const mapDispatchToProps = dispatch => ({
  fetchEssay: essayId => dispatch(fetchEssay(essayId)),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayShow);