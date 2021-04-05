import React from 'react';
import { Link, useLocation } from 'react-router-dom'

const path = {
  draftReviews: '/reviews/drafts',
  submittedReviews: '/reviews',
  essaysToReview: '/essays/reviewables',
  draftEssays: /^\/essays\/((\bdrafts\b)|(\bedit\b)).*$/m,
  submittedEssays: /^\/essays\/?((?!new)(?!edit)(?!drafts).)*$/m,
  newEssay: '/essays/new'
}

const SideBar = ({ loggedIn, mode }) => {
  const location = useLocation();

  if (loggedIn) {
    if (mode === "review") {
      return (
        <div className="sidebar col col-1-8">
          <h2>Review Mode</h2>

          <ul>
            <li>
              <Link className={location.pathname === path.draftReviews ? "active-route" : ""} to={path.draftReviews}>
                Drafts
              </Link>
            </li>
            <li>
              <Link className={location.pathname === path.submittedReviews ? "active-route" : ""} to={path.submittedReviews}> 
                Reviews
              </Link>
            </li>
            <li>
              <Link className={location.pathname === path.essaysToReview ? "active-route" : ""} to={path.essaysToReview}>
                For Review
              </Link>
            </li>
          </ul>
        </div>
      );
    } else { // mode === "submit"
      return (
        <div className="sidebar col col-1-8">
          <h2>Essay Mode</h2>

          <ul>
            <li>
              <Link className={location.pathname.match(path.draftEssays) ? "active-route" : ""} to='/essays/drafts'>
                Drafts
              </Link>
            </li>
            <li>
             <Link className={location.pathname.match(path.submittedEssays) ? "active-route" : ""} to='/essays'>
                Submissions
              </Link>
            </li>
            <li>
              <Link className={location.pathname === path.newEssay ? "active-route" : ""} to={path.newEssay}>
                New Essay
              </Link>
            </li>
          </ul>
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