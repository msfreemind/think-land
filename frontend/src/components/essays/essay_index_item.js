import React from 'react';
import { Link } from 'react-router-dom';

const EssayIndexItem = ({ essay, doReview }) => {
  if (doReview) {
    return (
      <li className="index-item">
        <Link to={ `/essays/${essay._id}/reviews/new` }><h2>{ essay.theme }</h2></Link>
        <small>Author: {essay.author.firstName + " " + essay.author.lastName }</small>
      </li>
    );
  } else {
    return (
      <li className="index-item">
        <Link to={ `/essays/${essay._id}` }><h2>{ essay.theme }</h2></Link>
        <strong>Review: </strong>
        { essay.reviews.length > 0 
          ? <Link to={ `/reviews/${essay.reviews[0]._id}` }>
              <strong className="review-item"> 
                { essay.reviews[0].text.substring(0, 75).replace(/<\/?[^>]+(>|$)/g, "") }
                { " . . ." }
                { ` —Reviewer: ` + essay.reviews[0].reviewer.firstName + " " + essay.reviews[0].reviewer.lastName }
              </strong>
            </Link>            
          : <strong>None</strong>
        }
      </li>
    );
  } 
}

export default EssayIndexItem;