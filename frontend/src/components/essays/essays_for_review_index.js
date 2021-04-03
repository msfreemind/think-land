import React from 'react';

class EssaysForReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviewableEssays();
  }

  render() {
    return (
      <div className="index col col-7-8">
        <ul>
          { this.props.reviewables.map((essay, idx) => <li key={idx}>{essay.theme + "--" + essay.category.name}</li>) }
        </ul>
      </div>
    );
  }  
};

export default EssaysForReviewIndex;