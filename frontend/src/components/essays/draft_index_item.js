import React from 'react';
import { Link } from 'react-router-dom';

const DraftIndexItem = ({ draft }) => {
  return (
    <li>
      <Link to={ `/essays/edit/${draft._id}` }>{ draft.theme ? draft.theme : "Untitled draft" }</Link>
    </li>
  );
}

export default DraftIndexItem;