import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.reviews.map((review, idx) => <ReviewIndexItem key={idx} review={review}/>) }
        </ul>
      </div>
    );
  }  
};

export default ReviewIndex;