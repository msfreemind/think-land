import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ id: "", subject: "", theme: "", body: "", tags: "605a89eaeaca82b33f7e74a6" });

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBody = this.setBody.bind(this);
  }

  componentDidMount() {
    if (this.props.fetchEssay) {
      this.props.fetchEssay(this.props.match.params.essayId).then(
        () => this.populateState()
      );
    }
  }

  populateState() {
    const { essay } = this.props;
    this.setState({ id: this.props.match.params.essayId, subject: essay.subject, theme: essay.theme, body: essay.body });
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.processForm(this.state).then(
      () => {
        if (!this.props.errors) this.props.history.push('/')    
      }
    );
  }

  setBody(value) {
    this.setState({ body: value });
  }

  render() {
    const headerText = this.props.actionType === "new" ? "New Essay" : "Edit Essay";

    return (
      <div className="form-container">
        <h1>{ headerText }</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Subject" onChange={this.handleInput} id="subject" value={this.state.subject}/>

          <br/>

          <input type="text" placeholder="Theme" onChange={this.handleInput} id="theme" value={this.state.theme}/>

          <br/>

          <ReactQuill theme="snow" onChange={this.setBody} value={this.state.body}/>

          <br/>

          {/* <select name="" id=""></select> */}

          <button>Submit Essay</button>
        </form>
      </div>
    )
  } 
};

export default EssayForm;