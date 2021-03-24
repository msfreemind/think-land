import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.login(this.state).then(
      () => {
        if (!this.props.errors) this.props.history.push('/')    
      }
    );
  }

  render() {
    return (
      <div className="form-container">
        <h1>Sign In</h1>

        <form onSubmit={this.handleSubmit}>
          <ul className="session-errors">
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>

          <input type="text" placeholder="Email" onChange={this.handleInput} id="email" value={this.state.email}/>

          <br/>

          <input type="password" placeholder="Password" onChange={this.handleInput} id="password" value={this.state.password}/>

          <br/>

          <button>Sign In</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;