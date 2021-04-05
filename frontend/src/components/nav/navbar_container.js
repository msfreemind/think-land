import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { setMode } from '../../actions/mode_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  mode: state.ui.mode
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);