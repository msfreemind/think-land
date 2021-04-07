import React from 'react';
import EssayIndexItem from './essay_index_item';

class EssayIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ essaysLoaded: false });
  }

  componentDidMount() {
    this.props.fetchEssays().then( () => this.setState({ essaysLoaded: true }) );
    this.props.setMode("submit");
  }

  render() {
    if (this.state.essaysLoaded) {
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
    } else {
      return (
        <div></div>
      );
    }
  }  
};

export default EssayIndex;