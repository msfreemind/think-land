import { connect } from 'react-redux';
import { fetchEssay } from '../../actions/essay_actions';
import EssayShow from './essay_show';

const mapStateToProps = state => ({
  essay: state.entities.essays[0]
});

const mapDispatchToProps = dispatch => ({
  fetchEssay: essayId => dispatch(fetchEssay(essayId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayShow);