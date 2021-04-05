import React from 'react';
import ReviewIndexItem from '../reviews/review_index_item';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

class EssayShow extends React.Component {
  componentDidMount() {
    this.props.fetchEssay(this.props.essayId);
  }

  render() {
    const { essay } = this.props;

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

          <h1>Reviews</h1>
          <ul>
            { essay.reviews.map((review, idx) => <ReviewIndexItem key={idx} num={idx} review={review}/>) }
          </ul>          
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