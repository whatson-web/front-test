import React, { Component } from "react";

class ListRegions extends Component {
  state = {
    listRegions: this.props.listRegions
  };
  render() {
    const { listRegions } = this.state;
    return (
      <ul>
        {listRegions.map(item => {
          return <li>{item.nom}</li>;
        })}
      </ul>
    );
  }
}

export default ListRegions;
