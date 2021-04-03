import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = ({ loggedIn, mode }) => {
  if (loggedIn) {
    if (mode === "review") {
      return (
        <div className="sidebar col col-1-8">
          <Link to={'/reviews/drafts'}>Drafts</Link>
          <Link to={'/reviews'}>Reviews</Link>
          <Link to={'/essays/reviewables'}>For Review</Link>
        </div>
      );
    } else { // mode === "submit"
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

export default SideBar;