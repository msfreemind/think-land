import React from 'react';
import EssayIndexItem from './essay_index_item';

class EssayIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { essaysLoaded: false };
  }

  componentDidMount() {
    this.props.fetchEssays().then( () => this.setState({ essaysLoaded: true }) );
    this.props.setMode("submit");
  }

  printEssays() {
    if (this.props.essays.length > 0) {
      return (
        <ul>
          { this.props.essays.map((essay, idx) => <EssayIndexItem key={idx} essay={essay}/>) }
        </ul>
      );
    } else {
      return this.state.essaysLoaded ? "None." : "";
    }
  }

  render() {
    return (
      <div className="index col col-7-8">
        <h1>Submitted Essays</h1>
        { this.printEssays() }
      </div>
    );
  }  
};

export default EssayIndex;