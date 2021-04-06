import { connect } from 'react-redux';
import { fetchEssays } from '../../actions/essay_actions';
import { setMode } from '../../actions/mode_actions';
import EssayIndex from './essay_index';

const mapStateToProps = state => ({
  essays: Object.values(state.entities.essays)
});

const mapDispatchToProps = dispatch => ({
  fetchEssays: () => dispatch(fetchEssays()),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayIndex);