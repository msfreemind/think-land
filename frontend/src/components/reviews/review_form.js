import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ id: "", text: "" });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setText = this.setText.bind(this);
  }

  componentDidMount() {
    if (this.props.fetchReview) {
      this.props.fetchReview(this.props.match.params.reviewId).then(
        () => this.populateState()
      );
    }
  }

  populateState() {
    const { review } = this.props;
    this.setState({ id: this.props.match.params.reviewId, text: review.text });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.processForm(this.state).then(
      () => {
        if (!this.props.errors) this.props.history.push('/')    
      }
    );
  }

  setText(value) {
    this.setState({ text: value });
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
    const headerText = this.props.actionType === "new" ? "New Review" : "Edit Review";

    return (
      <div className="form-container">
        <h1>{ headerText }</h1>

        <form onSubmit={this.handleSubmit}>
          <ReactQuill theme="snow" modules={this.modules} onChange={this.setText} value={this.state.text}/>

          <br/>

          {/* <select name="" id=""></select> */}

          <button>Submit Review</button>
        </form>
      </div>
    )
  } 
};

export default ReviewForm;