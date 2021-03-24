import { connect } from 'react-redux';
import { updateEssay, fetchEssay } from '../../actions/essay_actions';
import EssayForm from './essay_form';

const mapStateToProps = state => ({
  essay: state.entities.essays[0],
  actionType: "edit"
});

const mapDispatchToProps = dispatch => ({
  fetchEssay: essayId => dispatch(fetchEssay(essayId)),
  processForm: essay => dispatch(updateEssay(essay))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);