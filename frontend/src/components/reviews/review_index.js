import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const { indexType } = this.props;

    return (
      <div className="index col col-7-8">
        <h1>{ indexType === "draft" ? "Draft" : "Submitted" } Reviews</h1>
        <ul>
          { this.props.reviews.map((review, idx) => <ReviewIndexItem key={idx} indexType={indexType} review={review}/>) }
        </ul>
      </div>
    );
  }  
};

export default ReviewIndex;