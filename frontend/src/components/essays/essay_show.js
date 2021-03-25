import React from 'react';
import ReviewIndexItem from '../reviews/review_index_item';

class EssayShow extends React.Component {
  componentDidMount() {
    this.props.fetchEssay(this.props.match.params.essayId);
  }

  render() {
    const { essay } = this.props;

    if (essay) {
      return (
        <div>
          <h1>{ essay.subject }</h1>
          <h2>{ essay.theme }</h2>
          <p>{ essay.body }</p>

          <h1>Reviews</h1>
          <ul>
            { essay.reviews.map((review, idx) => <ReviewIndexItem key={idx} review={review}/>) }
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