import React from 'react';
import { Link } from 'react-router-dom';

const EssayIndexItem = ({ essay, doReview }) => {
  return (
    <li className="index-item">
      { doReview 
        ? <Link to={ `/essays/${essay._id}/reviews/new` }><h2>{ essay.theme }</h2></Link> 
        : <Link to={ `/essays/${essay._id}` }><h2>{ essay.theme }</h2></Link> 
      }
      <small>Review: Blah, by James Bond</small>
    </li>
  );
}

export default EssayIndexItem;