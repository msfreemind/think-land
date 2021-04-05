import React from 'react';
import ReviewIndexItem from '../reviews/review_index_item';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

class EssayShow extends React.Component {
  componentDidMount() {
    if (this.props.match) this.props.fetchEssay(this.props.match.params.essayId);    
  }

  renderReviews() {
    const { essay } = this.props;

    return(
      <div>
        <h1>Reviews</h1>

        <ul>
          { essay.reviews.length > 0 
            ? essay.reviews.map((review, idx) => <ReviewIndexItem key={idx} num={idx + 1} review={review}/>) 
            : <strong className="no-reviews">None.</strong>
          }
        </ul>
      </div>
    );
  }

  render() {
    const { essay, showReviews } = this.props;

    if (essay) {
      return (
        <div className="essay col col-7-8">
          <h1>{ essay.subject }</h1>
          <h2>{ essay.theme }</h2>
          <div className="byline">
            By: {essay.author.firstName} {essay.author.lastName} &nbsp; | &nbsp; Category: {essay.category.name}
          </div>
          <ReactQuill value={essay.body} readOnly={true} theme={"bubble"}/>

          <br/>

          { showReviews ? this.renderReviews() : "" }         
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }    
  }  
};

export default EssayShow;