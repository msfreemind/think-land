import { connect } from 'react-redux';
import { fetchDrafts } from '../../actions/draft_actions';
import { setMode } from '../../actions/mode_actions';
import DraftIndex from './draft_index';

const mapStateToProps = state => ({
  drafts: Object.values(state.entities.drafts)
});

const mapDispatchToProps = dispatch => ({
  fetchDrafts: () => dispatch(fetchDrafts()),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftIndex);