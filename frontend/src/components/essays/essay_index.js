import React from 'react';
import EssayIndexItem from './essay_index_item';

class EssayIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEssays();
    this.props.setMode("submit");
  }

  render() {
    return (
      <div className="index col col-7-8">
        <h1>Submitted Essays</h1>
        <ul>
          { this.props.essays.length > 0
            ? this.props.essays.map((essay, idx) => <EssayIndexItem key={idx} essay={essay}/>) 
            : <strong>None.</strong>
          }
        </ul>
      </div>
    );
  }  
};

export default EssayIndex;