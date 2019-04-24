import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";

import Login from "./containers/Login";
import CRUDManager from "./containers/CRUDManager";

class App extends Component {
  state = {
    logged: this.props.email !== null && this.props.email !== undefined
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        logged: nextProps.email !== null && nextProps.email !== undefined
      });
    }
  }

  render() {
    if (this.state.logged) {
      return <CRUDManager />;
    } else {
      return <Login />;
    }
  }
}

const mapStateToProps = state => ({
  email: state.auth.email
});

export default connect(mapStateToProps)(App);
