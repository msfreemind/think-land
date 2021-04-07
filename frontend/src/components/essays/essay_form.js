import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
Font.whitelist = ['blah', 'roboto', 'mali'] ; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);

const fontSizeStyle = ReactQuill.Quill.import('attributors/style/size');
fontSizeStyle.whitelist = ['14px', '20px', '24px', '36px', '48px'];
ReactQuill.Quill.register(fontSizeStyle, true);

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      subject: "", 
      theme: "", 
      body: "", 
      category: "",
      draftMessage: "",
      formDataLoaded: false
    };

    this.autoSaveTimeout = null;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBody = this.setBody.bind(this);
    this.saveDraft = this.props.createDraft || this.props.updateDraft;
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.setMode("submit");

    if (this.props.actionType === "new") {
      this.props.clearActiveDraft();
    } else {
      this.props.fetchDraft(this.props.match.params.draftId).then(
        () => this.populateState()
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.draftId !== this.props.match.params.draftId) {
      this.props.fetchDraft(this.props.match.params.draftId).then(
        () => this.populateState()
      );
    }
  }

  populateState() {
    const { draft } = this.props;

    this.setState({ 
      id: draft._id, 
      subject: draft.subject, 
      theme: draft.theme, 
      body: draft.body,
      category: draft.category ? draft.category._id : "",
      formDataLoaded: true
    });
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
    this.initAutoSave();
  }

  handleSubmit(event) {
    event.preventDefault();
    window.clearTimeout(this.autoSaveTimeout);

    this.props.createEssay(this.state).then(() => {
      if (this.isEmpty(this.props.essayErrors)) {
        if (this.state.id) this.props.destroyDraft(this.state.id);
        this.props.history.push('/essays');
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
    }, 4000);
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  modules = {
    toolbar: [
      [{'font': Font.whitelist }],
      [{ 'size': fontSizeStyle.whitelist }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{ 'align': [] }, {'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'header': 1 }, { 'header': 2 }],
      ['clean']
    ],
  }

  render() {
    if (this.props.actionType === "new" || (this.props.actionType === "edit" && this.state.formDataLoaded)) {
      return (
        <div className="col col-7-8 form-container new-essay">
          <h1>New Essay</h1>
  
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Subject" onChange={this.handleInput} id="subject" value={this.state.subject}/>
            <strong className="error">{this.props.essayErrors.subject}</strong>
            <strong className="error">{this.props.draftErrors.subject}</strong>
  
            <input type="text" placeholder="Theme" onChange={this.handleInput} id="theme" value={this.state.theme}/>
            <strong className="error">{this.props.essayErrors.theme}</strong>
            <strong className="error">{this.props.draftErrors.theme}</strong>
  
            <div className="editor-wrapper">
              <ReactQuill theme="snow" modules={this.modules} onChange={this.setBody} value={this.state.body}/>
              <strong className="error">{this.props.essayErrors.body}</strong>
              <strong className="draft-msg">{ this.state.draftMessage }</strong>
            </div>
  
            <select onChange={this.handleInput} id="category" value={this.state.category}>
              <option value="">---- Select Category ----</option>
              {this.props.categories.map(
                (category, idx) => <option key={idx} value={category._id}>{category.name}</option>
              )}
            </select>
            <strong className="error">{this.props.essayErrors.category}</strong>

            <br/>
  
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