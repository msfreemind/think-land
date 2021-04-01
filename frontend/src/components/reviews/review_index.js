import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    return (
      <div className="index col col-7-8">
        <ul>
          { this.props.reviews.map((review, idx) => <ReviewIndexItem key={idx} review={review}/>) }
        </ul>
      </div>
    );
  }  
};

export default ReviewIndex;