import React from "react";
import { Field, reduxForm } from "redux-form";
import { countries } from "../data";

let CreateManageUsers = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Firstname:</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          label="firstName"
        />
      </div>
      <div className="form-group">
        <label>Lastname:</label>
        <Field name="lastName" component="input" type="text" label="lastName" />
      </div>
      <div className="form-group">
        <label>Street Number:</label>
        <Field
          name="streetNumber"
          component="input"
          type="text"
          label="street Number"
        />
      </div>
      <div className="form-group">
        <label>Streetname:</label>
        <Field
          name="StreetName"
          component="input"
          type="text"
          label="Street Name"
        />
      </div>
      <div className="form-group">
        <label>Zipcode:</label>
        <Field name="zipCode" component="input" type="text" label="Zipcode" />
      </div>
      <div className="form-group">
        <label>City:</label>
        <Field name="city" component="input" type="text" label="City" />
      </div>
      <div className="form-group">
        <label>Country:</label>
        <Field name="country" label="Country" component="select">
          <option />
          {countries.map((country, countryIndex) => (
            <option value={country} key={countryIndex}>
              {country}
            </option>
          ))}
        </Field>
      </div>
      <div className="form-group">
        <button type="submit" className="validButton">
          Créer utilisateur
        </button>
      </div>
    </form>
  );
};
CreateManageUsers = reduxForm({
  form: "login"
})(CreateManageUsers);

export default CreateManageUsers;
