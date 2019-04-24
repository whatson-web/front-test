import React, { Component } from "react";
// React router
import { Link } from "react-router-dom";
// Redux
import { logout } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
// Component
import ManageUsers from "../components/ManageUsers";
// style
import "./styles/CRUDManagerStyle.scss";

class CRUDManager extends Component {
  state = {
    listUser: this.props.listUser
  };

  disconnect() {
    this.props.dispatch(logout());
  }

  render() {
    const { listUser } = this.state;
    return (
      <div>
        {/* CRUDManager */}
        <div id="container">
          <h2>Affichage des utilisateurs enregistré</h2>
          <ManageUsers listUser={listUser} />
        </div>
        <Link to="/regions" id="buttonNavigate">
          Essayer le get
        </Link>
        <button id="buttonDisconnect" onClick={() => this.disconnect()}>
          disconnect
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listUser: state.users.listUser,
  regions: state.api.regions
});

export default connect(mapStateToProps)(CRUDManager);
