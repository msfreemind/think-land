import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ id: "", text: "" });

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const headerText = this.props.actionType === "new" ? "New Review" : "Edit Review";

    return (
      <div className="form-container">
        <h1>{ headerText }</h1>

        <form onSubmit={this.handleSubmit}>
          <textarea 
            onChange={this.handleInput}  
            id="text" 
            cols="30" 
            rows="10" 
            value={this.state.text}
          />

          <br/>

          {/* <select name="" id=""></select> */}

          <button>Submit Review</button>
        </form>
      </div>
    )
  } 
};

export default ReviewForm;