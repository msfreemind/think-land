import { connect } from 'react-redux';
import { createEssay } from '../../actions/essay_actions';
import EssayForm from './essay_form';

const mapStateToProps = () => ({
  actionType: "new"
});

const mapDispatchToProps = dispatch => ({
  processForm: essay => dispatch(createEssay(essay))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);