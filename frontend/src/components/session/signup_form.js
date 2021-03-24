import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      password2: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.signup(this.state).then(
      () => {
        if (!this.props.errors) this.props.history.push('/')    
      }
    );
  }

  render() {
    return (
      <div className="form-container">
        <h1>Sign up</h1>

        <form onSubmit={this.handleSubmit}>
          <ul className="session-errors">
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>

          <input type="text" placeholder="Email" onChange={this.handleInput} id="email" value={this.state.email}/>

          <br/>
          
          <input type="text" placeholder="First Name" onChange={this.handleInput} id="firstName" value={this.state.firstName}/>

          <br/>

          <input type="text" placeholder="Last Name" onChange={this.handleInput} id="lastName" value={this.state.lastName}/>

          <br/>

          <input type="password" placeholder="Password" onChange={this.handleInput} id="password" value={this.state.password}/>

          <br/>

          <input type="password" placeholder="Confirm Password" onChange={this.handleInput} id="password2" value={this.state.password2}/>

          <br/>

          <button>Sign up</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;