import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      id: "",
      subject: "", 
      theme: "", 
      body: "", 
      tags: "605a89eaeaca82b33f7e74a6",
      draftMessage: ""
    });

    this.autoSaveTimeout = null;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBody = this.setBody.bind(this);
    this.saveDraft = this.props.createDraft || this.props.updateDraft;
  }

  componentDidMount() {
    if (this.props.actionType === "new") {
      this.props.clearActiveDraft();
    } else {
      this.props.fetchDraft(this.props.match.params.draftId).then(
        () => this.populateState()
      );
    }
  }

  populateState() {
    const { draft } = this.props;
    this.setState({ id: draft._id, subject: draft.subject, theme: draft.theme, body: draft.body });
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
    this.initAutoSave();
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createEssay(this.state).then(() => {
      if (this.isEmpty(this.props.essayErrors)) {
        this.props.destroyDraft(this.state.id);
        this.props.history.push('/');
      }
    });
  }

  setBody(value) {
    this.setState({ body: value });
    this.initAutoSave();
  }

  initAutoSave() {
    window.clearTimeout(this.autoSaveTimeout);
    this.setState({ draftMessage: "" });

    this.autoSaveTimeout = window.setTimeout(() => {
      this.saveDraft(this.state).then(() => {
        if (this.isEmpty(this.props.draftErrors)) {
          const { draft } = this.props;
          this.setState({ id: draft._id });

          this.saveDraft = this.props.updateDraft;
          this.setState({ draftMessage: "Draft Saved!" });
        }
      });
    }, 5000);
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  modules = {
    toolbar: [
      [{'font': []}],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{ 'align': [] }, {'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'header': 1 }, { 'header': 2 }],
      ['clean']
    ],
  }

  render() {
    if (this.props.actionType === "new" || (this.props.actionType === "edit" && this.props.draft)) {
      return (
        <div className="form-container">
          <h1>New Essay</h1>
  
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Subject" onChange={this.handleInput} id="subject" value={this.state.subject}/>
            {this.props.essayErrors.subject}
            {this.props.draftErrors.subject}
  
            <br/>
  
            <input type="text" placeholder="Theme" onChange={this.handleInput} id="theme" value={this.state.theme}/>
            {this.props.essayErrors.theme}
            {this.props.draftErrors.theme}
  
            <br/>
  
            <ReactQuill theme="snow" modules={this.modules} onChange={this.setBody} value={this.state.body}/>
            {this.props.essayErrors.body}
  
            <br/>
  
            { this.state.draftMessage }
  
            <br/>
  
            {/* <select name="" id=""></select> */}
  
            <button>Submit Essay</button>
          </form>
        </div>
      )
    } else {
     return (
      <div></div>
     );
    }    
  } 
};

export default EssayForm;