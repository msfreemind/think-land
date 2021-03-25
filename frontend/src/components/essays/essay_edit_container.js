import { connect } from 'react-redux';
import { updateEssay, fetchEssay } from '../../actions/essay_actions';
import EssayForm from './essay_form';

const mapStateToProps = (state, ownProps) => ({
  essay: state.entities.essays[ownProps.match.params.essayId],
  actionType: "edit"
});

const mapDispatchToProps = dispatch => ({
  fetchEssay: essayId => dispatch(fetchEssay(essayId)),
  processForm: essay => dispatch(updateEssay(essay))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);