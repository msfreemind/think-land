import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

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

    this.props.login(this.state).then(
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
        <h1>Log In</h1>

        <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder="Email" onChange={this.handleInput} id="email" value={this.state.email}/>
          <strong className="error">{this.props.errors.email}</strong>

          <input type="password" placeholder="Password" onChange={this.handleInput} id="password" value={this.state.password}/>
          <strong className="error">{this.props.errors.password}</strong>

          <br/>

          <button>Sign In</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;