import React from 'react';
import EssayIndexItem from './essay_index_item';

class EssaysForReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { essaysLoaded: false };
  }

  componentDidMount() {
    this.props.fetchReviewableEssays().then( () => this.setState({ essaysLoaded: true }) );
    this.props.setMode("review");
  }

  printEssays() {
    if (this.props.reviewables.length > 0) {
      return (
        <ul>
          { this.props.reviewables.map((essay, idx) => <EssayIndexItem key={idx} essay={essay} doReview={true}/>) }
        </ul>
      );
    } else {
      return this.state.essaysLoaded ? "None." : "";
    }
  }

  render() {
    return (
      <div className="index col col-7-8">
        <h1>Essays for Review</h1>
        { this.printEssays() }
      </div>
    );
  }  
};

export default EssaysForReviewIndex;