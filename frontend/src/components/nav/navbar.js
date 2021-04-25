import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.enterSubmitMode = this.enterSubmitMode.bind(this);
    this.enterReviewMode = this.enterReviewMode.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  enterSubmitMode() {
    this.props.setMode("submit");
    this.props.history.push('/essays');
  }

  enterReviewMode() {
    this.props.setMode("review");
    this.props.history.push('/reviews');
  }

  demoLogin(e) {
    e.preventDefault();

    this.props.login({ email: "guest@reasonlift.com", password: "password" }).then(
      () => this.props.history.push('/essays')
    );
  }

  getLinks() {
    const { loggedIn, logout, mode, currentUser } = this.props;

    if (loggedIn) {
      return (
        <ul className="header-nav">
          <div id="hamburger">
            <i  className="fas fa-bars"/>
            <ul id="user-dropdown2">
              <li className="select-title">Essays</li>
              <li className="selectable"><Link to="/essays/drafts">Drafts</Link></li>
              <li className="selectable"><Link to="/essays">Submissions</Link></li>
              <li className="selectable"><Link to="/essays/new">New Essay</Link></li>
              <li className="select-title">Reviews</li>
              <li className="selectable"><Link to="/reviews/drafts">Drafts</Link></li>
              <li className="selectable"><Link to="/reviews">Submissions</Link></li>
              <li className="selectable"><Link to="/essays/reviewables">For Review</Link></li>
            </ul>
          </div>
          
          <i id="sign-out" onClick={logout} className="fas fa-sign-out-alt"/>

          <div className="modes">
            <li className={mode === "submit" ? "mode-active" : ""} onClick={this.enterSubmitMode}>Essay Mode</li>
            <li className={mode === "review" ? "mode-active" : ""} onClick={this.enterReviewMode}>Review Mode</li>
          </div>

          <li id="user-button">
            <button>{currentUser.name} &nbsp; <div className="arrow-down"/></button>

            <ul id="user-dropdown">
              <li onClick={logout}>Log Out</li>
            </ul>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="header-nav">
          <Link to="/signup"><i className="fas fa-user-plus"/></Link>
          <Link to="/login"><i id="sign-in" className="fas fa-sign-in-alt"/></Link>

          <button className="demo" onClick={this.demoLogin}>DEMO</button>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      );
    }
  }

  render() {
    const { mode } = this.props;

    return (
      <header className="header">
        <Link to={mode === "submit" ? "/essays" : "/reviews"}><h1>Reason Lift!</h1></Link>
        { this.getLinks() }        
      </header>
    );   
  }
}

export default withRouter(NavBar);