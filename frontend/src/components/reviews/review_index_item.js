import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review }) => {
  return (
    <li className="index-item">
      <Link to={ `/reviews/${review._id}` }><h2>{ review.reviewer.lastName }</h2></Link>
    </li>
  );
}

export default ReviewIndexItem;