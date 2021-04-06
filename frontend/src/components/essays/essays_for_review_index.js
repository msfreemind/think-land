import React from 'react';
import EssayIndexItem from './essay_index_item';

class EssaysForReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviewableEssays();
  }

  render() {
    return (
      <div className="index col col-7-8">
        <h1>Essays for Review</h1>
        <ul>
          { this.props.reviewables.length > 0
            ? this.props.reviewables.map((essay, idx) => <EssayIndexItem key={idx} essay={essay} doReview={true}/>)
            : <strong>None.</strong>
          }
        </ul>
      </div>
    );
  }  
};

export default EssaysForReviewIndex;