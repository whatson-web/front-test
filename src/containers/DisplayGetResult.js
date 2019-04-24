import React, { Component } from "react";
// React router
import { Link } from "react-router-dom";
// Redux
import { logout } from "../redux/reducer/authReducer";
import { getRegions } from "../redux/reducer/appelApiReducer";
import { connect } from "react-redux";
// Component
import ListRegions from "../components/ListRegions";
// style
import "./styles/DisplayGetResultStyle.scss";

class DisplayGetResult extends Component {
  state = {
    listRegions: this.props.regions
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        listRegions: nextProps.regions
      });
    }
  }

  disconnect() {
    this.props.dispatch(logout());
    this.props.history.push(`/`);
  }

  render() {
    const { listRegions } = this.state;
    return (
      <div>
        <div id="second">
          <button
            id="buttonRegion"
            onClick={() => this.props.dispatch(getRegions())}
          >
            Récupérer les régions de France
          </button>
          <Link to="/" id="buttonRegion">
            Retour
          </Link>
          {listRegions !== (null && undefined) ? (
            <ListRegions listRegions={listRegions} />
          ) : (
            false
          )}
        </div>
        <button id="buttonDisconnect" onClick={() => this.disconnect()}>
          disconnect
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  regions: state.api.regions
});

export default connect(mapStateToProps)(DisplayGetResult);
