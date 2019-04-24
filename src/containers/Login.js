import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
// style
import "./styles/LoginStyle.scss";
import logo from "../logo.svg";
// Redux
import { login } from "../redux/reducer/authReducer";
import { connect } from "react-redux";

class Login extends Component {
  submit = values => {
    this.props.dispatch(login(values.mail));
  };

  render() {
    return (
      <div className="Background">
        <img src={logo} className="App-Logo" alt="logo" />
        <h2>Bienvenue sur le test de Whatson Web</h2>
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect()(Login);
