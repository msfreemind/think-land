import React from 'react';
import ReactQuill from 'react-quill';
import EssayShow from '../essays/essay_show';
import * as FormUtil from '../../util/form_styling';
import 'react-quill/dist/quill.bubble.css';

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviewLoaded: false };
  }

  componentDidMount() {
    FormUtil.enableFormStyling();
    this.props.setMode("review");
    this.props.fetchReview(this.props.match.params.reviewId).then( () => this.setState({ reviewLoaded: true }));
  }

  componentWillUnmount() {
    FormUtil.disableFormStyling();
  }

  render() {
    const { review, fetchEssay } = this.props;

    if (this.state.reviewLoaded) {
      return (
        <div className="new-review">
          <EssayShow essay={review.essay} fetchEssay={fetchEssay} setMode={this.props.setMode} showReviews={false} />

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