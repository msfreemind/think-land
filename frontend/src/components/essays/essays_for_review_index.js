import React from 'react';
import EssayIndexItem from './essay_index_item';

class EssaysForReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviewableEssays();
  }

  render() {
    return (
      <div className="index col col-7-8">
        <ul>
          { this.props.reviewables.map((essay, idx) => <EssayIndexItem key={idx} essay={essay} doReview={true}/>) }
        </ul>
      </div>
    );
  }  
};

export default EssaysForReviewIndex;