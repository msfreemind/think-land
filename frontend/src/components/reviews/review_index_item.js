import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review }) => {
  return (
    <li>
      <Link to={ `/reviews/${review._id}` }>{ review.reviewer.lastName }</Link>
    </li>
  );
}

export default ReviewIndexItem;