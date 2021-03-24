import React from 'react';

class EssayShow extends React.Component {
  componentDidMount() {
    this.props.fetchEssay(this.props.match.params.essayId);
  }

  render() {
    const { essay } = this.props;

    if (essay) {
      return (
        <div>
          <h1>{ essay.subject }</h1>
          <h2>{ essay.theme }</h2>
          <p>{ essay.body }</p>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }    
  }  
};

export default EssayShow;