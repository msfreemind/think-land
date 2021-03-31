import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

  populateState() {
    const { review } = this.props;

    this.setState({ 
      id: this.props.match.params.reviewId, 
      text: review.text, 
      essayId: review.essay,
      revieweeId: review.reviewee._id,
      formDataLoaded: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true }, () => {
      this.saveReview(this.state).then(() => {
        if (this.isEmpty(this.props.errors)) this.props.history.push('/')
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
    if (this.props.actionType === "new" || (this.props.actionType === "edit" && this.state.formDataLoaded)) {
      return (
        <div className="form-container">
          <h1>New Review</h1>
  
          <form onSubmit={this.handleSubmit}>
            <ReactQuill theme="snow" modules={this.modules} onChange={this.setText} value={this.state.text}/>
            {this.props.errors.text}
  
            <br/>
  
            { this.state.draftMessage }
  
            <br/>
  
            {/* <select name="" id=""></select> */}
  
            <button>Submit Review</button>
          </form>
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