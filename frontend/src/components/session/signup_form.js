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
        if (this.isEmpty(this.props.errors)) this.props.history.push('/essays')    
      }
    );
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  render() {
    return (
      <div className="form-container">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Email" onChange={this.handleInput} id="email" value={this.state.email}/>
          {this.props.errors.email}
          
          <input type="text" placeholder="First Name" onChange={this.handleInput} id="firstName" value={this.state.firstName}/>
          {this.props.errors.firstName}

          <input type="text" placeholder="Last Name" onChange={this.handleInput} id="lastName" value={this.state.lastName}/>
          {this.props.errors.lastName}

          <input type="password" placeholder="Password" onChange={this.handleInput} id="password" value={this.state.password}/>
          {this.props.errors.password}

          <input type="password" placeholder="Confirm Password" onChange={this.handleInput} id="password2" value={this.state.password2}/>
          {this.props.errors.password2}

          <br/>

          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;