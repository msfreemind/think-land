import React from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ subject: "", theme: "", body: "", tags: "605a89eaeaca82b33f7e74a6" });

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createEssay(this.state).then(
      () => {
        if (!this.props.errors) this.props.history.push('/')    
      }
    );
  }

  render() {
    return (
      <div className="form-container">
        <h1>New Essay</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Subject" onChange={this.handleInput} id="subject" value={this.state.subject}/>

          <br/>

          <input type="text" placeholder="Theme" onChange={this.handleInput} id="theme" value={this.state.theme}/>

          <br/>

          <textarea 
            onChange={this.handleInput}  
            id="body" 
            cols="30" 
            rows="10" 
            value={this.state.body}
          />

          <br/>

          {/* <select name="" id=""></select> */}

          <button>Submit Essay</button>
        </form>
      </div>
    )
  } 
};

export default EssayForm;