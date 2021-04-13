import React from 'react';
import DraftIndexItem from './draft_index_item';

class DraftIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { draftsLoaded: false };
  }

  componentDidMount() {
    this.props.fetchDrafts().then( () => this.setState({ draftsLoaded: true }) );
    this.props.setMode("submit");
  }

  printDrafts() {
    if (this.props.drafts.length > 0) {
      return (
        <ul>
          { this.props.drafts.map((draft, idx) => <DraftIndexItem key={idx} draft={draft}/>) }
        </ul>
      );
    } else {
      return this.state.draftsLoaded ? "None." : "";
    }
  }

  render() {
    return (
      <div className="index col col-7-8">
        <h1>Draft Essays</h1>
        { this.printDrafts() }
      </div>
    );   
  }  
};

export default DraftIndex;