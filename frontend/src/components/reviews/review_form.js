import React from 'react';
import ReactQuill from 'react-quill';
import EssayShow from '../essays/essay_show';
import * as FormUtil from '../../util/form_styling';
import 'react-quill/dist/quill.snow.css';

const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
Font.whitelist = ['blah', 'roboto', 'mali'] ; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);

const fontSizeStyle = ReactQuill.Quill.import('attributors/style/size');
fontSizeStyle.whitelist = ['14px', '20px', '24px', '36px', '48px'];
ReactQuill.Quill.register(fontSizeStyle, true);

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ id: "", text: "", essayId: "", revieweeId: "", draftMessage: "", submitted: false, formDataLoaded: false });

    this.autoSaveTimeout = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setText = this.setText.bind(this);
    this.saveReview = this.props.actionType === "new" ? this.props.createReview : this.props.updateReview; 
  }

  componentDidMount() {
    FormUtil.enableFormStyling();
    this.props.setMode("review");

    if (this.props.actionType === "new") {
      this.props.clearActiveReview();

      this.props.fetchEssay(this.props.match.params.essayId).then(
        () => this.setState({ essayId: this.props.essay._id, revieweeId: this.props.essay.author._id })
      );
    } else { // actionType === "edit"
      this.props.fetchReview(this.props.match.params.reviewId).then(
        () => this.populateState()
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.reviewId !== this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId).then(
        () => this.populateState()
      );
    }
  }

  componentWillUnmount() {
    FormUtil.disableFormStyling();
  }

  populateState() {
    const { review } = this.props;

    this.setState({ 
      id: this.props.match.params.reviewId, 
      text: review.text, 
      essayId: review.essay._id,
      revieweeId: review.reviewee._id,
      formDataLoaded: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.clearTimeout(this.autoSaveTimeout);

    this.setState({ submitted: true }, () => {
      this.saveReview(this.state).then(() => {
        if (this.isEmpty(this.props.errors)) this.props.history.push('/reviews')
        else this.setState({ submitted: false })  
      })
    });    
  }

  setText(value) {
    this.setState({ text: value });
    this.initAutoSave();
  }

  initAutoSave() {
    window.clearTimeout(this.autoSaveTimeout);
    this.setState({ draftMessage: "" });

    this.autoSaveTimeout = window.setTimeout(() => {
      this.saveReview(this.state).then(() => {
        if (this.isEmpty(this.props.errors)) {
          const { review } = this.props;
          this.setState({ id: review._id });

          this.saveReview = this.props.updateReview;
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
        <div className="new-review">
          <EssayShow essay={this.props.essay || this.props.review.essay} setMode={this.props.setMode} showReviews={false}/>

          <div className="form-container">
            <h1>New Review</h1>
    
            <form onSubmit={this.handleSubmit}>
              <div className="editor-wrapper">
                <ReactQuill theme="snow" modules={this.modules} onChange={this.setText} value={this.state.text}/>
                <strong className="error">{this.props.errors.text}</strong>
                <strong className="draft-msg">{ this.state.draftMessage }</strong>
              </div>
    
              <button>Submit Review</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }    
  } 
};

export default ReviewForm;