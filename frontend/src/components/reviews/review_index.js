import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ reviewsLoaded: false });
  }

  componentDidMount() {
    this.props.fetchReviews().then( () => this.setState({ reviewsLoaded: true }) );
    this.props.setMode("review");
  }

  render() {
    const { indexType } = this.props;

    if (this.state.reviewsLoaded) {
      return (
        <div className="index col col-7-8">
          <h1>{ indexType === "draft" ? "Draft" : "Submitted" } Reviews</h1>
          <ul>
            { this.props.reviews.length > 0
              ? this.props.reviews.map((review, idx) => <ReviewIndexItem key={idx} indexType={indexType} review={review}/>) 
              : <strong>None.</strong>
            }
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

export default ReviewIndex;