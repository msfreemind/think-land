import { connect } from 'react-redux';
import { createEssay } from '../../actions/essay_actions';
import EssayForm from './essay_form';

const mapDispatchToProps = dispatch => ({
  createEssay: essay => dispatch(createEssay(essay))
});

export default connect(null, mapDispatchToProps)(EssayForm);