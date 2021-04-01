import React from 'react';
import DraftIndexItem from './draft_index_item';

class DraftIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDrafts();
  }

  render() {
    return (
      <div className="index col col-7-8">
        <ul>
          { this.props.drafts.map((draft, idx) => <DraftIndexItem key={idx} draft={draft}/>) }
        </ul>
      </div>
    );
  }  
};

export default DraftIndex;