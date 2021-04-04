import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ num, review }) => {
  return (
    <li className="index-item">
      {(num + 1) + ". "} &nbsp;
      <Link to={ `/reviews/${review._id}` }>
        <strong className="review">
          {review.text.substring(0, 100).replace(/<\/?[^>]+(>|$)/g, "")}
          {" . . ."}       
        </strong>
      </Link>
      &nbsp;
      {" — Reviewer: " + review.reviewer.firstName + " " + review.reviewer.lastName }
    </li>
  );
}

export default ReviewIndexItem;