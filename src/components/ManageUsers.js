import React, { Component } from "react";
import { countries } from "../data";
import CreateManageUsers from "./CreateManageUsers";
// style
import "./styles/ManageUsersStyle.scss";
// Redux
import { connect } from "react-redux";
import { updateList } from "../redux/reducer/userReducer";

class DisplayUsers extends Component {
  state = {
    listUser: this.props.listUser,
    displayUser: [].fill(false, 0, this.props.listUser.length),
    displayCreate: false,
    fieldIncomplete: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        listUser: nextProps.listUser,
        displayUser: [].fill(false, 0, this.props.listUser.length)
      });
    }
  }

  // handle country change
  handleSelectChange(e, index) {
    let listUser = this.state.listUser;
    listUser[index].address.country = e.target.value;
    this.setState(listUser);
    this.props.dispatch(updateList(listUser));
  }

  // handle name change
  handleInputChange(e, index) {
    let listUser = this.state.listUser;
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      listUser[index][e.target.name] = e.target.value;
    } else {
      listUser[index].address[e.target.name] = e.target.value;
    }
    this.setState(listUser);
    this.props.dispatch(updateList(listUser));
  }

  handleDisplay(userIndex) {
    let displayUser = this.state.displayUser;
    displayUser[userIndex] = !displayUser[userIndex];
    this.setState({ displayUser });
  }

  handleDelete(userIndex) {
    let listUser = this.state.listUser;
    listUser.splice(userIndex, 1);
    this.setState(
      {
        listUser
      },
      () => {
        this.props.dispatch(updateList(this.state.listUser));
      }
    );
  }

  handleCreate(values) {
    console.log(this.state);
    if (Object.keys(values).length !== 7) {
      this.setState({
        fieldIncomplete: true
      });
    } else {
      const user = {
        firstName: values.firstName,
        lastName: values.lastName,
        address: {
          streetNumber: values.streetNumber,
          streetName: values.streetName,
          zipCode: values.zipCode,
          city: values.city,
          country: values.country
        }
      };
      let listUser = this.state.listUser;
      listUser.push(user);
      this.setState({
        listUser,
        fieldIncomplete: false,
        displayCreate: false
      });
      this.props.dispatch(updateList(listUser));
    }
  }

  render() {
    const { listUser } = this.state;
    // Display & allow to edit/delete users
    const displayList = listUser.map((user, userIndex) => (
      <div>
        <p
          className="buttonDisplay buttonBlue"
          onClick={() => this.handleDisplay(userIndex)}
        >
          {!this.state.displayUser[userIndex]
            ? "Modifier " + user.firstName
            : "Terminé"}
        </p>
        <div
          className={!this.state.displayUser[userIndex] ? "hidden" : undefined}
        >
          <form>
            <label>
              Firstname:
              <input
                value={user.firstName}
                onChange={e => this.handleInputChange(e, userIndex)}
                type="text"
                name="firstName"
              />
            </label>
            <br />
            <label>
              Lastname:
              <input
                value={user.lastName}
                onChange={e => this.handleInputChange(e, userIndex)}
                type="text"
                name="lastName"
              />
            </label>
            <br />
            <label>
              Street Number:
              <input
                value={user.address.streetNumber}
                onChange={e => this.handleInputChange(e, userIndex)}
                type="text"
                name="streetNumber"
              />
            </label>
            <br />
            <label>
              Street Name:
              <input
                value={user.address.streetName}
                onChange={e => this.handleInputChange(e, userIndex)}
                type="text"
                name="streetName"
              />
            </label>
            <br />
            <label>
              Zipcode:
              <input
                value={user.address.zipCode}
                onChange={e => this.handleInputChange(e, userIndex)}
                type="text"
                name="zipCode"
              />
            </label>
            <br />
            <label>
              City:
              <input
                value={user.address.city}
                onChange={e => this.handleInputChange(e, userIndex)}
                type="text"
                name="city"
              />
            </label>
            <br />
            <label>Country:</label>
            <select
              value={user.address.country}
              onChange={e => this.handleSelectChange(e, userIndex)}
            >
              {countries.map((country, countryIndex) => (
                <option value={country} key={countryIndex}>
                  {country}
                </option>
              ))}
            </select>
          </form>
          <p
            className="buttonDisplay buttonRed"
            onClick={() => this.handleDelete(userIndex)}
          >
            Supprimer
          </p>
        </div>
      </div>
    ));
    // Allow to create a new user
    const createUser = (
      <div>
        {/* CREATE BUTTON */}
        <p
          className="buttonDisplay buttonGreen"
          onClick={() =>
            this.setState({
              displayCreate: !this.state.displayCreate,
              fieldIncomplete: false
            })
          }
        >
          {!this.state.displayCreate
            ? "Créer"
            : "Remplissez le formulaire pour ajouter un utilisateur"}
        </p>
        <br />
        {/* DISPLAY IF FIELD INCOMPLETE */}
        <p
          className={
            !this.state.fieldIncomplete ? "hidden" : "buttonDisplay buttonRed"
          }
        >
          Veuillez remplir tous les champs pour ajouter un nouvel utilisateur
        </p>
        <div className={!this.state.displayCreate ? "hidden" : undefined}>
          {/* CREATE FORM */}
          <CreateManageUsers onSubmit={this.handleCreate.bind(this)} />
        </div>
      </div>
    );
    return (
      <div>
        {displayList}
        {createUser}
      </div>
    );
  }
}

export default connect()(DisplayUsers);
