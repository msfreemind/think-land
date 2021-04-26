import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();

    this.props.login({ email: "guest@reasonlift.com", password: "password" }).then(
      () => this.props.history.push('/essays')
    );
  }

  render() {
    return (
      <div className="splash-main">
        <div className="splash first-splash">
          <div className="splash-heading">
            <h1>Improve Your Thinking</h1>
            <h2>Submit essays and have them reviewed by experts</h2>
            <div className="splash-buttons">
              <button className="join-button"><Link to="/signup">Join Now</Link></button>
              <button className="demo-button" onClick={this.demoLogin}>Demo</button>
            </div>
          </div>

          <img className="splash-main-img" src="/images/typing.jpg" alt="" />
        </div>
  
        <div className="splash second-splash">
          <img src="/images/draft.png" alt="New Essay" />
          <img src="/images/review.png" alt="Essay Review" />                     
        </div>
  
        <div className="splash-bottom">
          <h1>Better Writing = Better Thinking</h1>
          <h2>Achieve maximum clarity on your concepts and beliefs</h2>
          <button className="join-button"><Link to="/signup">Join Now</Link></button>
        </div>
  
        <footer>© 2021, Mark Swan</footer>
      </div>
    );
  }
}

export default withRouter(Splash);