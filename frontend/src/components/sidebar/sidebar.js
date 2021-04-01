import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviewMode: false };
  }

  render() {
    if (this.props.loggedIn) {
      if (this.state.reviewMode) {
        return (
          <div className="sidebar col col-1-8">
            <Link to={'/reviews/drafts'}>Drafts</Link>
            <Link to={'/reviews'}>Reviews</Link>
            <Link to={'/essays/new'}>For Review</Link>
          </div>
        );
      } else {
        return (
          <div className="sidebar col col-1-8">
            <Link to={'/essays/drafts'}>Drafts</Link>
            <Link to={'/essays'}>Submissions</Link>
            <Link to={'/essays/new'}>New Essay</Link>
          </div>
        );
      }      
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default NavBar;