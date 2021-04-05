import React from 'react';
import ReactQuill from 'react-quill';
import EssayShow from '../essays/essay_show';
import 'react-quill/dist/quill.bubble.css';

class ReviewShow extends React.Component {
  componentDidMount() {
    document.getElementsByClassName("sidebar")[0].style.display = "none";
    document.getElementsByClassName("main")[0].style.width = "100%";

    this.props.fetchReview(this.props.match.params.reviewId);
  }

  componentWillUnmount() {
    document.getElementsByClassName("sidebar")[0].style.display = "flex";
    document.getElementsByClassName("main")[0].style.width = "1000px";
  }

  render() {
    const { review, fetchEssay } = this.props;

    if (review) {
      return (
        <div className="new-review">
          <EssayShow essay={review.essay} fetchEssay={fetchEssay} showReviews={false} />

          <div className="review">
            <h1>Reviewed By: { `${review.reviewer.firstName} ${review.reviewer.lastName}` }</h1>

            <ReactQuill value={review.text} readOnly={true} theme={"bubble"}/>
          </div>       
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