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

  render() {
    if (this.state.essaysLoaded) {
      return (
        <div className="index col col-7-8">
          <h1>Essays for Review</h1>
          <ul>
            { this.props.reviewables.length > 0
              ? this.props.reviewables.map((essay, idx) => <EssayIndexItem key={idx} essay={essay} doReview={true}/>)
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

export default EssaysForReviewIndex;