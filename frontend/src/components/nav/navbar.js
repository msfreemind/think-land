import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviewMode: false };
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
              <li onClick={() => this.setState({ reviewMode: false })}>Submit Mode</li>
              <li onClick={() => this.setState({ reviewMode: true })}>Review Mode</li>
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

export default NavBar;