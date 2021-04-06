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

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.signup(this.state).then(
      () => {
        if (this.isEmpty(this.props.errors)) this.props.history.push('/essays')    
      }
    );
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  render() {
    return (
      <div className="signup form-container">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Email" onChange={this.handleInput} id="email" value={this.state.email}/>
          <strong className="error">{this.props.errors.email}</strong>
          
          <input type="text" placeholder="First Name" onChange={this.handleInput} id="firstName" value={this.state.firstName}/>
          <strong className="error">{this.props.errors.firstName}</strong>

          <input type="text" placeholder="Last Name" onChange={this.handleInput} id="lastName" value={this.state.lastName}/>
          <strong className="error">{this.props.errors.lastName}</strong>

          <input type="password" placeholder="Password" onChange={this.handleInput} id="password" value={this.state.password}/>
          <strong className="error">{this.props.errors.password}</strong>

          <input type="password" placeholder="Confirm Password" onChange={this.handleInput} id="password2" value={this.state.password2}/>
          <strong className="error">{this.props.errors.password2}</strong>

          <br/>

          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;