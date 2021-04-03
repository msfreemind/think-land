import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.enterSubmitMode = this.enterSubmitMode.bind(this);
    this.enterReviewMode = this.enterReviewMode.bind(this);
  }

  enterSubmitMode() {
    this.props.setMode("submit");
    this.props.history.push('/essays');
  }

  enterReviewMode() {
    this.props.setMode("review");
    this.props.history.push('/reviews');
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <ul className="header-nav">
          <i onClick={this.uploadVideo} className="fas fa-cloud-upload-alt"/>

          <i id="sign-out" onClick={this.props.logout} className="fas fa-sign-out-alt"/>

          <li id="user-button">
            <button>{this.props.currentUser.name} &nbsp; <div className="arrow-down"/></button>

            <ul id="user-dropdown">
              <li onClick={this.enterSubmitMode}>Submit Mode</li>
              <li onClick={this.enterReviewMode}>Review Mode</li>
              <li onClick={this.props.logout}>Log Out</li>
            </ul>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="header-nav">
          <Link to="/signup"><i className="fas fa-user-plus"/></Link>
          <Link to="/login"><i id="sign-in" className="fas fa-sign-in-alt"/></Link>

          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      );
    }
  }

  render() {
    return (
      <header className="header">
        <Link to="/essays"><h1>Reason Lift!</h1></Link>
        { this.getLinks() }        
      </header>
    );   
  }
}

export default withRouter(NavBar);