import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

class ReviewShow extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  render() {
    const { review } = this.props;

    if (review) {
      return (
        <div className="col col-7-8">
          <strong>Essay Author: { `${review.reviewee.firstName} ${review.reviewee.lastName}` }</strong>
          <br/>
          <strong>Reviewed By: { `${review.reviewer.firstName} ${review.reviewer.lastName}` }</strong>
          <br/>
          <ReactQuill value={review.text} readOnly={true} theme={"bubble"}/>         
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