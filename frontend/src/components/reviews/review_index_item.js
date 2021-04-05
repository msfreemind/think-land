import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ num, review }) => {
  if (num) {
    return (
      <li className="index-item">
        {num + ". "} &nbsp;
        <Link to={ `/reviews/${review._id}` }>
          <strong className="review-item">
            {review.text.substring(0, 100).replace(/<\/?[^>]+(>|$)/g, "")}
            {" . . ."}       
          </strong>
        </Link>
        &nbsp;
        {" — Reviewer: " + review.reviewer.firstName + " " + review.reviewer.lastName }
      </li>
    );
  } else {
    return (
      <li className="index-item">
        <Link to={ `/reviews/${review._id}` }>
          <h2>
            { review.text.substring(0, 100).replace(/<\/?[^>]+(>|$)/g, "") }
            { " . . ." }
          </h2>     
        </Link>

        <small>Essay: {review.essay.theme}</small>
      </li>
    );
  }
}

export default ReviewIndexItem;