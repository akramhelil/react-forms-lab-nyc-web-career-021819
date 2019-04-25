import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  loginConfirm = (e) => {
    e.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin(e)
    }
  }
  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  render() {
    return (
      <form onSubmit={this.loginConfirm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
