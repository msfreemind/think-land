import React from 'react';
import { Link } from 'react-router-dom';

const DraftIndexItem = ({ draft }) => {
  return (
    <li className="index-item">
      <Link to={ `/essays/edit/${draft._id}` }>
        <h2>{ draft.theme ? draft.theme : "Untitled draft" }</h2>
      </Link>
    </li>
  );
}

export default DraftIndexItem;