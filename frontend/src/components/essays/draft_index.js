import React from 'react';
import DraftIndexItem from './draft_index_item';

class DraftIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ draftsLoaded: false });
  }

  componentDidMount() {
    this.props.fetchDrafts().then( () => this.setState({ draftsLoaded: true }) );
    this.props.setMode("submit");
  }

  render() {
    if (this.state.draftsLoaded) {
      return (
        <div className="index col col-7-8">
          <h1>Draft Essays</h1>
          <ul>
            { this.props.drafts.length > 0
              ? this.props.drafts.map((draft, idx) => <DraftIndexItem key={idx} draft={draft}/>) 
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

export default DraftIndex;