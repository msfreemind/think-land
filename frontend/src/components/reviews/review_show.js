import React from 'react';

class ReviewShow extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  render() {
    const { review } = this.props;

    if (review) {
      return (
        <div>
          <strong>Essay Author: { `${review.reviewee.firstName} ${review.reviewee.lastName}` }</strong>
          <br/>
          <strong>Reviewed By: { `${review.reviewer.firstName} ${review.reviewer.lastName}` }</strong>
          <br/>
          <p>{ review.text }</p>         
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }    
  }  
};

export default ReviewShow;