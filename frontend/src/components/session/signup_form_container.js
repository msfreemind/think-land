import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);