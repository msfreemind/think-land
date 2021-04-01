import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const Auth = ({ loggedIn, path, exact, component: Component }) => {
  return (
    <Route 
      path={path}
      exact={exact}
      render={props => (
        loggedIn ? <Redirect to="/essays"/> : <Component {...props}/>
      )} 
    />
  );
};

const Protected = ({ loggedIn, path, exact, component: Component }) => {
  return (
    <Route 
      path={path}
      exact={exact}
      render={props => (
        loggedIn ? <Component {...props}/> : <Redirect to="/login"/>
      )} 
    />
  );
};

export const AuthRoute = withRouter( connect(mapStateToProps)(Auth) );
export const ProtectedRoute = withRouter( connect(mapStateToProps)(Protected) );