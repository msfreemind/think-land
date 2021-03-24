import React from 'react';
import EssayIndexItem from './essay_index_item';

class EssayIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEssays();
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.essays.map((essay, idx) => <EssayIndexItem key={idx} essay={essay}/>) }
        </ul>
      </div>
    );
  }  
};

export default EssayIndex;