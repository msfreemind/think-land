import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviewsLoaded: false };
  }

  componentDidMount() {
    this.props.fetchReviews().then( () => this.setState({ reviewsLoaded: true }) );
    this.props.setMode("review");
  }

  printReviews() {
    const { indexType, reviews } = this.props;


    if (reviews.length > 0) {
      return (
        <ul>
          { reviews.map((review, idx) => <ReviewIndexItem key={idx} indexType={indexType} review={review}/>) }
        </ul>
      );
    } else {
      return this.state.reviewsLoaded ? "None." : "";
    }
  }

  render() {
    return (
      <div className="index col col-7-8">
        <h1>{ this.props.indexType === "draft" ? "Draft" : "Submitted" } Reviews</h1>
        { this.printReviews() }
      </div>
    );  
  }  
};

export default ReviewIndex;